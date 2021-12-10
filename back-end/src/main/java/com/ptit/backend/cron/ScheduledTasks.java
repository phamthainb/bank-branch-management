package com.ptit.backend.cron;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class ScheduledTasks {
    @Scheduled(cron = "15 * * * * ?")
    public void scheduleTaskWithCronExpression() {
        System.out.println("Tính lãi hằng ngày....................................................");
    }
}
