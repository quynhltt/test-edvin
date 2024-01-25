import React from 'react'
import Header from '../../components/Header/Header'
import ContactList from './components/ContactList/ContactList'

export default function ChatPage({ Component }) {
    return (
        <div className='chatPage h-full min-h-screen flex flex-col'>
            <Header title={'Header'}></Header>
            <div className='flex-grow mt-0'>
                <div className="container h-full flex">
                    <div className="contactList w-1/5 h-full">
                        <ContactList />
                    </div>
                    <div className="chatBox w-4/5 h-full">
                        <Component />
                    </div>
                </div>
            </div>
        </div>
    )
}
