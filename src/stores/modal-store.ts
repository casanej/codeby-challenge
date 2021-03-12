export interface ModalContent {
    content: React.ReactNode;
    header?: React.ReactNode;
    onClose?: () => void;
    buttons?: ModalButton[];
}

export interface ModalButton {
    text: React.ReactNode;
    type: 'info' | 'success' | 'error' | 'warning' | 'dark' | 'light';
    function?: () => void;
}

export interface ModalQueue {
    readonly key: string;
    readonly type: 'info' | 'success' | 'error' | 'warning';
    // readonly urgency: 'none' | 'low' | 'medium' | 'high' | 'critical'
    readonly urgency: 0 | 1 | 2 | 3 | 4;
    readonly bypass: boolean;
    readonly isPersistent: boolean;
    readonly modal: ModalContent;
}

export class ModalStore {
    public queue: ModalQueue[];

    constructor() {
        this.queue = [];
    }

    addQueue({ key, type, urgency, bypass, isPersistent, modal }: ModalQueue) {
        this.queue.push({ key, type, urgency, bypass, isPersistent, modal });
    }

    nextModal(): ModalContent | null {
        try {
            if (this.queue.length > 0) return this.queue.pop().modal;

            return null;
        } catch (err) {
            return null;
        }
    }
}

