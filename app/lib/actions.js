'use server'

import { revalidatePath } from 'next/cache'
import { Product, User } from './models'
import { connectToDB } from './utils'
import { redirect } from 'next/navigation'
import bcrypt from 'bcrypt'
import { signIn } from '../auth'

// Add User
export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData)

  try {
    await connectToDB()

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    })

    await newUser.save()
  } catch (error) {
    console.error(error)
    throw new Error('Failed to create User!')
  }

  revalidatePath('/dashboard/users')
  redirect('/dashboard/users')
}

// Update User
export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData)

  try {
    await connectToDB()

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    }

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === '' || undefined) && delete updateFields[key]
    )

    await User.findByIdAndUpdate(id, updateFields)
  } catch (error) {
    console.error(error)
    throw new Error('Failed to update User!')
  }

  revalidatePath('/dashboard/users')
  redirect('/dashboard/users')
}

// Delete User
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    await connectToDB()

    await User.findByIdAndDelete(id)
  } catch (error) {
    console.error(error)
    throw new Error('Failed to delete User!')
  }

  revalidatePath('/dashboard/users')
}

// Add Product
export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size, cat } =
    Object.fromEntries(formData)

  try {
    await connectToDB()

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
      cat,
    })

    await newProduct.save()
  } catch (error) {
    console.error(error)
    throw new Error('Failed to create Product!')
  }

  revalidatePath('/dashboard/products')
  redirect('/dashboard/products')
}

// Update Product
export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size, cat } =
    Object.fromEntries(formData)

  try {
    await connectToDB()

    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
      cat,
    }

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === '' || undefined) && delete updateFields[key]
    )

    await Product.findByIdAndUpdate(id, updateFields)
  } catch (error) {
    console.error(error)
    throw new Error('Failed to update Product!')
  }

  revalidatePath('/dashboard/products')
  redirect('/dashboard/products')
}

// Delete Product
export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    await connectToDB()

    await Product.findByIdAndDelete(id)
  } catch (error) {
    console.error(error)
    throw new Error('Failed to delete Product!')
  }

  revalidatePath('/dashboard/products')
}

// Login Authentication
export const authenticate = async (formData) => {
  const { username, password } = Object.fromEntries(formData)

  try {
    await signIn('credentials', { username, password })
  } catch (error) {
    console.error(error)
    throw new Error('Failed to Login!')
  }
}
