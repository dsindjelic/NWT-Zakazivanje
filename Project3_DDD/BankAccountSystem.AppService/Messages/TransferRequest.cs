﻿using System;
using System.Collections.Generic;
using System.Text;

namespace BankAccountSystem.AppService.Messages
{
    public class TransferRequest
    {
        public Guid AccountIdTo { get; set; }
        public Guid AccountIdFrom { get; set; }
        public decimal Amount { get; set; }
    }
}
