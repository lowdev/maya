package com.maya.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ForwardController {

    @RequestMapping(value = "/{path:[^\\.]*}")
    public String forward() {
        // Forward to index.html for Angular routing
        return "forward:/index.html";
    }
}
