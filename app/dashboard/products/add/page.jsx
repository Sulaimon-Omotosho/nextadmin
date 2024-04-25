import React from 'react'
import styles from '@/app/ui/dashboard/products/addProduct/addProduct.module.css'

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action='' className={styles.form}>
        <input type='text' name='title' placeholder='title' required />
        <select name='cat' id='cat'>
          <option value='general'>Choose a category</option>
          <option value='kitchen'>kitchen</option>
          <option value='phone'>phone</option>
          <option value='computer'>computer</option>
        </select>
        <input type='number' name='price' placeholder='price' />
        <input type='number' name='price' placeholder='price' />
        <input type='text' name='color' placeholder='color' />
        <input type='text' name='size' placeholder='size' />
        <textarea
          name='desc'
          id='desc'
          cols='30'
          rows='10'
          placeholder='Description'
        ></textarea>
      </form>
    </div>
  )
}

export default AddProductPage
