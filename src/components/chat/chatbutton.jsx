import React from 'react';
const Chatbutton = () => {
  const [showChatroomBtn, setShowChatroomBtn] = React.useState(false);
  const [showChatroom, setShowChatroom] = React.useState(false);
  const [isLarge, setIsLarge] = React.useState(false);
  const smallWith = '500px';

  
  // Add event listener to track mouse movement
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      // Show button when mouse moves to the bottom right corner
      if (e.clientX > window.innerWidth - 200 && e.clientY > window.innerHeight - 100) {
        setShowChatroomBtn(true);
      } else {
        setShowChatroomBtn(false);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div style={{
        position: 'fixed',
        bottom: '10px',
        right: showChatroom ? '0px' : isLarge?'-70vw':`-${smallWith}`, // Adjust position based on showChatroomBtn
        zIndex: '9999',
        width: isLarge?'70vw':smallWith, // Adjust width based on showChatroom
        height: '100vh', // Adjust height based on showChatroom
        paddingTop: '20px',
        transition: 'right 0.5s ease, width 0.5s ease',

      }}>
        <div style={{
          display: 'flex',
          alignItems:'start',
          justifyContent:'end',
          width: '100%',
          height: '100%',
         
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems:'end',
            justifyContent:'end',
            marginTop: '20px',
            width: 'fit-content',
          height: 'fit-content',
          border: '1px solid #e0e0e0',
          borderRadius: '10px 0 0 10px',
          backgroundColor: 'white',
          }}>
            <button 
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                margin: '10px',
              }}
              onClick={() => setShowChatroom(!showChatroom)}
            >
              <IconClose style={{
                height: '1rem',
                width: '1rem',
              }}/>
            </button>
            <button 
              style={{
                backgroundColor: 'transparent',
                cursor: 'pointer',
                border: 'none',
                margin: '10px',
              }}
              onClick={() => setIsLarge(!isLarge)}
            >
              {isLarge ? <IconResizeSmall style={{
                height: '1rem',
                width: '1rem',
              }}/> : <Icon140Enlarge2 style={{
                height: '1rem',
                width: '1rem',
              }}/>}
              
              
            </button>
          </div>
        <iframe
          src="https://chat.unieai.com"
          title="Chatroom"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
          }}
        />
        </div>
      </div>
    <div style={{
      position: 'fixed',
      bottom: '10px',
      right: showChatroomBtn ? '0px' : '-300px', // Adjust position based on showChatroomBtn
      zIndex: '9998',
      width: '100px', // Adjust width based on showChatroom
      height: '100px', // Adjust height based on showChatroom
      // backgroundColor: 'red',
      transition: 'right 0.5s ease', // Smooth transition for the right property
    }}>
      
      <button 
      onClick={() => setShowChatroom(!showChatroom)}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: '20px 0 0 20px',
        border: '1px solid #e0e0e0',
        cursor: 'pointer',
        // gradient background
        background: 'rgb(184,194,250)',
        background: 'radial-gradient(circle, rgba(184,194,250,1) 0%, rgba(252,252,252,1) 100%)'
      }}>
      <IconDependabotTwentyFour style={{
        height: '2rem',
        width: '2rem',
      }}/>

        <h1 style={{
          color: 'black',
          fontSize: '0.7rem',
          fontWeight: 'bold',
        
        }}>HealthcareGPT</h1>
      </button>
    </div>
    </>
  );
 
};

export default Chatbutton;


function IconDependabotTwentyFour(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M8.75 11a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5a.75.75 0 01.75-.75zm7.25.75a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z" />
      <path
        fillRule="evenodd"
        d="M9.813 1a.75.75 0 000 1.5H11.5V5H4.25A2.25 2.25 0 002 7.25v5.25H.75a.75.75 0 000 1.5H2v5.75A2.25 2.25 0 004.25 22h15.5A2.25 2.25 0 0022 19.75V14h1.25a.75.75 0 000-1.5H22V7.25A2.25 2.25 0 0019.75 5H13V1.75a.75.75 0 00-.75-.75H9.812zM3.5 7.25a.75.75 0 01.75-.75h15.5a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75V7.25z"
      />
    </svg>
  );
}


function IconClose(props) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
    </svg>
  );
}

function Icon140Enlarge2(props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16 0v6.5L13.5 4l-3 3L9 5.5l3-3L9.5 0zM7 10.5l-3 3L6.5 16H0V9.5L2.5 12l3-3z"
      />
    </svg>
  );
}

function IconResizeSmall(props) {
  return (
    <svg
      viewBox="0 0 900 1000"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M156 704L50 604h296v296L246 794 100 950 0 850l156-146m744-554L746 294l104 100H556V100l100 104L800 50l100 100" />
    </svg>
  );
}