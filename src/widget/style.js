
export const desktopWrapperStyle = {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    zIndex: 2147483647,
    background: 'rgb(229, 229, 229)',
    boxSizing: 'content-box',
    overflow: 'hidden'
};

export const desktopClosedWrapperStyleChat = {
    position: 'fixed',
    bottom: '0px',
    right: '0px',
    zIndex: 2147483647,
    minWidth: '400px',
    boxSizing: 'content-box',
    overflow: 'hidden',
    minHeight: '120px'
};

export const desktopOpenWrapperStyle = {
    position: 'fixed',
    border: '1px solid #666',
    bottom: '0px',
    right: '10px',
    zIndex: 2147483647,
    background: 'rgb(229, 229, 229)',
    boxSizing: 'content-box',
    overflow: 'hidden'
};

export const mobileClosedWrapperStyle = {
    position: 'fixed',
    bottom: 18,
    right: 18,
    zIndex: 2147483647,
    background: 'rgb(229, 229, 229)',
    boxSizing: 'content-box'
};

export const mobileOpenWrapperStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2147483647,
    width: '100%',
    height: '100%',
    background: 'rgb(229, 229, 229)',
    overflowY: 'visible',
    boxSizing: 'content-box'
};

export const desktopTitleStyle = {
    height: '50px',
    lineHeight: '30px',
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0 10px 20px',
    fontFamily: 'inherit',
    color: '#fff',
    cursor: 'pointer',
    borderBottom: '1px solid #ccc',
};

export const mobileTitleStyle = {
    height: 52,
    width: 52,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    webkitBoxShadow: '1px 1px 4px rgba(101,119,134,.75)',
    boxShadow: '1px 1px 4px rgba(101,119,134,.75)'
};
