package com.example.ppatest.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

/**
 * @author puspender
 */
@RestController
@RequestMapping("/api")
public class AuditController {

    @GetMapping("/audits")
    public List getAllAuditUsers() {
        return Collections.emptyList();
    }

    @GetMapping("/test")
    public void test(){
        System.out.println("Test");
    }

}
