enum ComputerType {
    PC = "PC",
    LAPTOP = "LAPTOP"
}

abstract class Computer {
    protected type: ComputerType;
    protected monitor: string;

    constructor(type: ComputerType, monitor: string) {
        this.type = type;
        this.monitor = monitor;
    }

    abstract getModel(): string;
}

class PC extends Computer {
    constructor(monitor: string) {
        super(ComputerType.PC, monitor);
    }

    getModel(): string {
        return `${this.type} with ${this.monitor}`;
    }
}

class Laptop extends Computer {
    constructor(monitor: string) {
        super(ComputerType.LAPTOP, monitor);
    }

    getModel(): string {
        return `${this.type} with ${this.monitor}`;
    }
}

enum MonitorType {
    LED = "LED",
    IPS = "IPS"
}

class LedFactory {
    static buildComputer(type: ComputerType): Computer {
        switch (type) {
            case ComputerType.PC:
                return new PC(MonitorType.LED);
            case ComputerType.LAPTOP:
                return new PC(MonitorType.LED);
            default:
                throw new Error("type not define");
        }
    }
}

class IpsFactory {
    static buildComputer(type: ComputerType): Computer {
        switch (type) {
            case ComputerType.PC:
                return new PC(MonitorType.IPS);
            case ComputerType.LAPTOP:
                return new PC(MonitorType.IPS);
            default:
                throw new Error("type not define");
        }
    }
}

class ComputerFactory {
    static buildComputer(computerType: ComputerType, monitorType: MonitorType): Computer {
        switch (monitorType) {
            case MonitorType.LED:
                return LedFactory.buildComputer(computerType);
            case MonitorType.IPS:
                return IpsFactory.buildComputer(computerType);
            default:
                throw new Error("type not define");
        }
    }
}

const laptopLed = ComputerFactory.buildComputer(ComputerType.LAPTOP, MonitorType.LED);
laptopLed.getModel();