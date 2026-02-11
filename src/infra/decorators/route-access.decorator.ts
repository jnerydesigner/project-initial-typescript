export const IS_PUBLIC_KEY = "isPublic";

export function Public(): MethodDecorator {
  return (target, propertyKey) => {
    Reflect.defineMetadata(IS_PUBLIC_KEY, true, target, propertyKey);
  };
}

export function Private(): MethodDecorator {
  return (target, propertyKey) => {
    Reflect.defineMetadata(IS_PUBLIC_KEY, false, target, propertyKey);
  };
}
