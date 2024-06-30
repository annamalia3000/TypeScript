import MovieInterface from './MovieInterface';

export default class Cart {
    items: MovieInterface[] = [];

    add(item: MovieInterface): void {
        this.items.push(item);
    }

    getAll(): MovieInterface[] {
        return [...this.items];
    }

    countSum(): number {
        return this.items.reduce((acc, iteam) => acc + iteam.price, 0);
    }

    countDiscount(discount: number): number {
        const sum = this.countSum();
        const discountAmount = (sum * discount) / 100;
        return sum - discountAmount;
    }

    removeById(id: number): void {
        const index = this.items.findIndex(item => item.id === id);
        if(index === -1) {
            throw new Error(`Item with id ${id} not found in cart`)
        } else {
            this.items.splice(index, 1);
        }
        
    }
    
}