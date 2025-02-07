import React, { useState } from 'react';
import { TicketContext } from '../../../Contexts/TicketContext';
import TicketsList from './TicketsList';
import TicketsMain from './TicketsMain';

function TicketsPage() {

  return (
    <TicketContext>
      <div className="flex min-h-screen bg-gray-900 text-white">
        <TicketsList />
        <TicketsMain />
      </div>
    </TicketContext>
  );
}

export default TicketsPage;