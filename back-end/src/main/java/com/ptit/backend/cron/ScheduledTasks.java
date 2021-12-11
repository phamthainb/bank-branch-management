package com.ptit.backend.cron;

import com.ptit.backend.entity.AccountEntity;
import com.ptit.backend.repository.AccountRepository;
import com.ptit.backend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ScheduledTasks {
    @Autowired
    AccountService accountService;

    @Autowired
    AccountRepository accountRepository;

    @Scheduled(cron = "15 * * * * ?")
    public void scheduleTaskWithCronExpression() {
        System.out.println("Tính lãi hằng ngày....................................................");
        // get all account
        List<AccountEntity> accountEntityList = accountRepository.findAll();

        // loop list
        for (AccountEntity account: accountEntityList){

        }
    }
}
