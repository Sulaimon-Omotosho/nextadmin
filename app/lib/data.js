import { Product, User } from './models'
import { connectToDB } from './utils'

// Fetch Users
export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, 'i')

  const ITEMS_PER_PAGE = 2

  try {
    connectToDB()
    const count = await User.find({ username: { $regex: regex } }).count()
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1))
    return { count, users }
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch Users!')
  }
}

// Fetch User
export const fetchUser = async (id) => {
  try {
    await connectToDB()
    const user = await User.findById(id)
    return user
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch Users!')
  }
}

// Fetch Products
export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, 'i')

  const ITEMS_PER_PAGE = 2

  try {
    connectToDB()
    const count = await Product.find({ title: { $regex: regex } }).count()
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1))
    return { count, products }
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch Products!')
  }
}

// Fetch Product
export const fetchProduct = async (id) => {
  try {
    connectToDB()
    const product = await Product.findById(id)
    return product
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch Product!')
  }
}
