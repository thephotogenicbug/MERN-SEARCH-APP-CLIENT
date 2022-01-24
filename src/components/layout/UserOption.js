import React, { useState } from 'react';
import './UserOption.css'
import { SpeedDial, SpeedDialAction } from '@material-ui/lab';

const UserOption = () => {

    const [open, setOpen] = useState(false)

    return (
      <>
       <SpeedDial
        ariaLabel='SpeedDail tooltip '
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
       >

       </SpeedDial>
      </>
  );
};

export default UserOption;
