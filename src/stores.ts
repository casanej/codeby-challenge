import React, { useContext } from 'react';
import { ModalStore } from './stores/modal-store';
import { TruffleStore } from './stores/truffle-store';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    interface Window {
        __stores__: {
            modalStore: ModalStore;
        }
    }
}

const truffleStore = new TruffleStore();
const modalStore = new ModalStore();

const stores = {
    truffleStore
}

if (typeof window !== 'undefined') {
    if (!window.__stores__) {
        window.__stores__ = {
            modalStore
        };
    }
}

export const StoreContext = React.createContext(stores);

export const useStores = () => useContext(StoreContext);