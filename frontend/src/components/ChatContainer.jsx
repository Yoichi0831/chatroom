import { useEffect, useRef } from 'react';
import { useChatStore } from '../store/useChatStore';
import { useAuthStore } from '../store/useAuthStore';
import ChatHeader from './ChatHeader';
import MessaageInput from './MessageInput';
import MessageSkeleton from './skeletons/MessageSkeleton';
import { formatMessageTime } from '../lib/utils';

const ChatContainer = () => {
    const { 
        messages, 
        getMessages, 
        isMessagesLoading, 
        selectedUser, 
        subscribeToNewMessages, 
        unsubscribeFromMessages 
    } = useChatStore();
    const { authUser } = useAuthStore();
    const messageEndRef = useRef(null);

    useEffect(() => {
        getMessages(selectedUser?._id);
        subscribeToNewMessages();
        return () => unsubscribeFromMessages();
    }, [selectedUser._id, getMessages, subscribeToNewMessages, unsubscribeFromMessages]);
    
    useEffect(()=>{
        if (messageEndRef.current && messages) {
            messageEndRef.current.scrollIntoView({ behavior: 'smooth'})
        };
    }, [messages])

    if (isMessagesLoading) {
        return (
            <div className='flex-1 flex flex-col overflow-auto'>
                <ChatHeader />
                <MessageSkeleton />
                <MessaageInput />
            </div>
        )
    };



    return <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <div className='flex-1 flex flex-col overflow-auto'>
            {messages.map((message)=>(
                <div
                    key={message._id}
                    className={`chat ${message.senderId === authUser._id ? 'chat-end' : 'chat-start'}`}
                    ref={messageEndRef}
                >
                    <div className='chat-image avatar'>
                        <div className='size-10 rounded-full'>
                            <img 
                                src={
                                    message.senderId === authUser._id 
                                    ? authUser.profilePic || "avatar.png" 
                                    : selectedUser.profilePic || "avatar.png" 
                                } 
                                alt="profile pic" 
                            />
                        </div>
                    </div>
                <div className='chat-header mb-1'>
                    <time className='text-xs opacity-50 ml-1'>
                        {formatMessageTime(message.createdAt)}
                    </time>
                </div>
                <div className='chat-bubble flex-col'>
                    {message.image && (
                        <img 
                            src={message.image} 
                            alt='message' 
                            className='sm:max-w-[200px] rounded-md mb-2'
                        />
                    )}
                    {message.text && (
                        <p>{message.text}</p>
                    )}
                </div>
            </div>
            ))}
        </div>
        <MessaageInput />
    </div>
};
export default ChatContainer;