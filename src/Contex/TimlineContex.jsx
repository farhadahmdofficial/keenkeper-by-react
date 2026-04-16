
import { useState } from 'react';
import { TimelineCt } from './TimelineC';

const TimlineContex = ({children}) => {

     const [timeline, settimeline] = useState([]);

      const data = {
        timeline,
        settimeline
    };
    return (<TimelineCt.Provider value={data}>
        {children}
    </TimelineCt.Provider>
        
        
            
      
    );
};

export default TimlineContex;