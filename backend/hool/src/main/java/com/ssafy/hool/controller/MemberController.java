package com.ssafy.hool.controller;

import com.ssafy.hool.domain.Member;
import com.ssafy.hool.dto.MemberCreateDto;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
public class MemberController {

    @PostMapping("/join")
    public void join(@RequestBody MemberCreateDto memberCreateDto) {
        Member member = Member.createMember(memberCreateDto);
    }
}