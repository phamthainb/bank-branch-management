package com.ptit.backend.cron;

import com.ptit.backend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class ScheduledTasks {
    @Autowired
    AccountService accountService;

    @Scheduled(cron = "15 * * * * ?")
    public void scheduleTaskWithCronExpression() {
        System.out.println("Tính lãi hằng ngày....................................................");

    }
}
