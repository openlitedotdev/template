import { Route } from 'wouter'
import { CreateProduct, Products } from '@/components/pages/products'
import { Categories, CreateCategory } from '@/components/pages/categories'
import { Customers } from '@/components/pages/customers'
import Login from '@/components/pages/login'
import Dashboard from '@/components/pages/dashboard'
import Orders from '@/components/pages/orders/order'

export default function Routes() {
  return (
    <>
      <Route path="/" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/products" component={Products} />
      <Route path="/products/new" component={CreateProduct} />
      <Route path="/categories" component={Categories} />
      <Route path="/categories/new" component={CreateCategory} />
      <Route path="/customers" component={Customers} />
      <Route path="/orders" component={Orders} />
    </>
  )
}
