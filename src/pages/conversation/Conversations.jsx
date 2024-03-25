import { Box } from '@mui/material';
import React from 'react';
import { PRIMARY_BG_COLOR } from '../../constants/color.js';
import ConversationsHeader from './conversations-header/ConversationsHeader';
import ConversationContent from './conversation-content/ConversationContent';

export default function Conversations() {

  const conversation_data = [
    { img: '', heading: 'Call Title', title: 'Call Summary', description: 'see all the 18 product insights', user: 'Aaran', org: 'Meta', update: 'Today at 9 pm', status: 'Under Developer' },
    { img: '', heading: 'Call Title', title: 'Call Summary', description: 'see all the 18 product insights', user: 'Aaran', org: '', update: 'Today at 9 pm', status: 'Under Developer' },
  ];

  return (
    <Box height='77vh' width='100%' padding='50px 100px' sx={{ backgroundColor: PRIMARY_BG_COLOR }}>
      <ConversationsHeader />
      <ConversationContent data={conversation_data} />
    </Box>
  );
}
