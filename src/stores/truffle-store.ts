/* eslint-disable camelcase */
import { configure, makeAutoObservable } from 'mobx';
import RequestService from '../services/request-service';
import { formatDate } from '../utils'
configure({ enforceActions: 'never' });

export interface AdditionalInfo {
    brandName: string;
    brandId: string;
}

export interface PriceTag {
    name: string;
    value: number;
    rawValue: number;
    isPercentual: boolean;
    identifier: string;
}

export interface Item {
    uniqueId: string;
    id: string;
    productId: string;
    ean: string;
    name: string;
    skuName: string;
    priceValidUntil: Date;
    tax: number;
    price: number;
    listPrice: number;
    sellingPrice: number;
    rewardValue: number;
    isGift: boolean;
    additionalInfo: AdditionalInfo;
    productCategoryIds: string;
    quantity: number;
    seller: string;
    sellerChain: string[];
    imageUrl: string;
    detailUrl: string;
    priceTags: PriceTag[];
    availability: string;
    measurementUnit: string;
    unitMultiplier: number;
}

export interface Totalizer {
    id: string;
    name: string;
    value: number;
}

export interface TruffleData {
    value: number;
    items: Item[];
    totalizers: Totalizer[];
}

export interface TruffleCart {
    [key: string]: {
        quantity: number;
        item: Item;
    }
}

export class TruffleStore {
    private requestService: RequestService = new RequestService();

    public products: Item[];
    public cart: TruffleCart[];
    public isLoading;
    public truffleQuantity: number;
    public truffleTotalPrice: number;

    constructor() {
        this.cart = [];
        this.products = [];
        this.isLoading = true;
        this.truffleQuantity = 0;
        this.truffleTotalPrice = 0;
        makeAutoObservable(this);
    }

    getTruflles = async () => {
        const truffles = await this.requestService.requestJson<TruffleData>('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/11b895d0-bc64-4f3a-bfa9-7c652be8d415/acima-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210312T022732Z&X-Amz-Expires=86400&X-Amz-Signature=734c5ccf275e2a42bbbd22861cc2fcbf130145aab42fab5c2c892f43f3ef97f2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22acima-10-reais.json%22');

        this.isLoading = false;

        if (!truffles.success) return;

        this.products = truffles.data.items;
    }

    updateCart = (id: string, quantity: number, item: Item) => {
        if (quantity > 0) {
            this.cart = {
                ...this.cart,
                [id.toString()]: {
                    quantity,
                    item
                }
            }
        } else {
            if (Object.keys(this.cart).includes(id)) {
                delete this.cart[parseInt(id)];
            }
        }
    }

    manageCart = (type: 'add' | 'subtract', price: number) => {
        if(type === 'add') {
            this.truffleQuantity += 1;
            this.truffleTotalPrice += price;
        } else if (type === 'subtract') {
            if(this.truffleQuantity - 1 >= 0) {
                this.truffleQuantity -= 1;
                this.truffleTotalPrice -= price;
            }
        }
    }
}