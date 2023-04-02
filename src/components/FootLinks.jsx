import React from 'react';
import Content from '../utilities/Content';

const FootLinks = () => {
  return (
    <div className='footlink'>
        { Content[4].footlinks.map((footlink) => (
            <div className='footlinks'>
                <p>{footlink.title}</p>
                {footlink.links.map((link) => (
                    <ul className='footlist'>
                        <li>{link.one}</li>
                        <li>{link.two}</li>
                        <li>{link.three}</li>
                        <li>{link.four}</li>
                    </ul>
                ))}
            </div>
        ))}
    </div>
  )
}

export default FootLinks