/**
 *
 *
 * @author: Bernhard Lukassen
 */

class Director {

    constructor() {
    }

    has(target, key) {
        return key in target;
    }

    get(target, prop, receiver) {
        return Reflect.get(...arguments);
    }

    set(obj, prop, value) {
        return Reflect.set(...arguments);
    }

    defineProperty(target, key, descriptor) {
        target[key] = undefined;
        return true;
    }

    deleteProperty(target, prop) {
        if (prop in target) {
            delete target[prop];
        }
    }

    getOwnPropertyDescriptor(target, prop) {
        return { configurable: true, enumerable: true, value: target[prop] };
    }

    getPrototypeOf(target) {
        return Object.getPrototypeOf(target);
    }

    construct(target, args) {
        return new target(...args);
    }

    apply(target, thisArg, argumentsList) {
        return target(...argumentsList);
    }

    isExtensible(target) {
        return Reflect.isExtensible(target);
    }

    preventExtensions(target) {
        target.canEvolve = false;
        return Reflect.preventExtensions(target);
    }

    setPrototypeOf(tagrget, targetProto) {
        return false;
    }

    ownKeys (target) {
        return Reflect.ownKeys(target)
    }
}

export default Builder = (tobbuilder) => {
    const ctrl = new Director();
    const proxy = new Proxy(tobbuilder, ctrl);
    return proxy
}
