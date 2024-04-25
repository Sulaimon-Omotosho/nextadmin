import React from 'react'
import styles from '@/app/ui/dashboard/users/addUser/addUser.module.css'

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action='' className={styles.form}>
        <input type='text' name='Username' placeholder='Username' required />
        <input type='email' name='email' placeholder='email' required />
        <input
          type='password'
          name='password'
          placeholder='password'
          required
        />
        <input type='phone' name='phone' placeholder='phone' />
        <select name='isAdmin' id='isAdmin'>
          <option value={false} selected>
            Is Admin?
          </option>
          <option value={true}>True</option>
          <option value={false}>false</option>
        </select>
        <select name='isActive' id='isActive'>
          <option value={true} selected>
            Is Active?
          </option>
          <option value={true}>True</option>
          <option value={false}>false</option>
        </select>
        <textarea
          name='address'
          id='address'
          rows='16'
          placeholder='Address'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage
