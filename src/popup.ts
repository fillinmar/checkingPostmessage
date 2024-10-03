export interface Props {
	url: string;
	// messageOrigin: string; // можно научиться выводить его из url, но пока и так норм
	// onMessage: (rawMessage: string) => void;
	// onClose: () => void;
	// width: number;
	// height: number;
}

type OnMessage<P = string> = (event: MessageEvent<P>) => void;

export class Popup {
	private popupWindow: Window | null = null;
	private closedCheckIntervalId: number | null = null;

	constructor(private readonly props: Props) {}

	public open() {
		const {url} = this.props;

		// честно стырено из vkontakte/superappkit
		// const screenX = typeof window.screenX !== 'undefined' ? window.screenX : window.screenLeft;
		// const screenY = typeof window.screenY !== 'undefined' ? window.screenY : window.screenTop;
		// const outerWidth =
		// 	typeof window.outerWidth !== 'undefined' ? window.outerWidth : document.body.clientWidth;
		// const outerHeight =
		// 	typeof window.outerHeight !== 'undefined' ? window.outerHeight : document.body.clientHeight;
		// const left = screenX + (outerWidth - width) / 2;
		// const top = screenY + (outerHeight - height) / 2;

		this.popupWindow = window.open(
			url,
			'check', // на всякий случай
			`popup=1`,
		);
		this.attachListeners();
	}

	public close() {
		this.detachListeners();

		if (this.popupWindow && !this.popupWindow.closed) {
			this.popupWindow.close();
		}
		this.popupWindow = null;
	}

	private readonly onMessage: OnMessage = (event) => {
		// if (event.origin !== this.props.messageOrigin) {
		// 	return;
		// }

		console.log('logs event', event);

		// this.props.onMessage(event.data);
	};

	private attachListeners() {
		console.log('logs attachListeners', )
		window.addEventListener('message', this.onMessage);

		// this.closedCheckIntervalId = window.setInterval(() => {
		// 	if (!this.popupWindow || this.popupWindow.closed) {
		// 		this.close();
		// 		this.props.onClose();
		// 	}
		// }, 1000);
	}

	private detachListeners() {
		console.log('logs in detachListeners')
		window.removeEventListener('message', this.onMessage);
		window.clearInterval(this.closedCheckIntervalId!);
	}
}
