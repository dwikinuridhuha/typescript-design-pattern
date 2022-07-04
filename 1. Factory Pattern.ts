const PICK_TYPE_DELIVERY = {
    TRUCK: "TRUCK",
    SHIP: "SHIP"
};

interface Deliver {
    qty: number;

    deliverBy(): void;
}

class Truck implements Deliver {
    qty: number;

    constructor(qty: number) {
        this.qty = qty;
    }

    deliverBy(): void {
        console.log("deliver by Truck and qty: " + this.qty)
    }
}

class Ship implements Deliver {
    qty: number;

    constructor(qty: number) {
        this.qty = qty;
    }

    deliverBy(): void {
        console.log("deliver by Ship and qty: " + this.qty)
    }
}

type DeliverInfo= {
    type: string;
    qty: number;
}

interface FactoryDeliver {
    create(deliverType: DeliverInfo): Deliver | null;
}

class FactoryDeliverImpl implements FactoryDeliver {
    create(deliverInfo: DeliverInfo): Deliver | null {
        try {
            if (deliverInfo.type == PICK_TYPE_DELIVERY.TRUCK) return new Truck(deliverInfo.qty);
            else if (deliverInfo.type == PICK_TYPE_DELIVERY.SHIP) return new Ship(deliverInfo.qty);
            return null;
        } catch (e: any) {
            throw new Error(e.message);
        }
    }
}

let deliverBy: FactoryDeliver = new FactoryDeliverImpl();

const byTruck = deliverBy.create({type: PICK_TYPE_DELIVERY.TRUCK, qty: 20});
const byShip = deliverBy.create({type: PICK_TYPE_DELIVERY.SHIP, qty: 200});
byTruck?.deliverBy();
byShip?.deliverBy();
