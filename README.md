# RO-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Rodolfo Lara

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'ro-product-card';
```

```
<ProductCard
    initialValues={{
        count: 4,
        // maxCount: 10
    }}
    product={product}
>
    {({ count, increaseBy, isMaxCountReached, maxCount, reset }) => (
        <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
        </>
    )}
</ProductCard>
```