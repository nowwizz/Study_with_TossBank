package com.study.springboot;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class ApiController {
    @PostMapping("/add")
    @ResponseBody
    public ResDto add(@RequestBody ReqDto reqDto) {
        System.out.println("num1 = " + reqDto.getNum1());
        System.out.println("num2 = " + reqDto.getNum2());
        System.out.println("result = " + reqDto.getResult());

        ResDto resDto = new ResDto();
        resDto.setStatus("OK");
        resDto.setResult(reqDto.getResult());

        return resDto;
    }

    @PostMapping("/subtract")
    @ResponseBody
    public ResDto substract(@RequestBody ReqDto reqDto) {
        System.out.println("num1 = " + reqDto.getNum1());
        System.out.println("num2 = " + reqDto.getNum2());
        System.out.println("result = " + reqDto.getResult());

        ResDto resDto = new ResDto();
        resDto.setStatus("OK");
        resDto.setResult(reqDto.getResult());

        return resDto;
    }

    @PostMapping("/multiply")
    @ResponseBody
    public ResDto multiply(@RequestBody ReqDto reqDto) {
        System.out.println("num1 = " + reqDto.getNum1());
        System.out.println("num2 = " + reqDto.getNum2());
        System.out.println("result = " + reqDto.getResult());

        ResDto resDto = new ResDto();
        resDto.setStatus("OK");
        resDto.setResult(reqDto.getResult());

        return resDto;
    }

    @PostMapping("/divide")
    @ResponseBody
    public ResDto divide(@RequestBody ReqDto reqDto) {
        System.out.println("num1 = " + reqDto.getNum1());
        System.out.println("num2 = " + reqDto.getNum2());
        System.out.println("result = " + reqDto.getResult());

        ResDto resDto = new ResDto();
        resDto.setStatus("OK");
        resDto.setResult(reqDto.getResult());

        return resDto;
    }
}
