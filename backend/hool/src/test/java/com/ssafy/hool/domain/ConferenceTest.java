package com.ssafy.hool.domain;

import com.ssafy.hool.repository.ConferenceRepository;
import com.ssafy.hool.repository.MemberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

@Transactional
@Rollback(value = false)
@SpringBootTest
class ConferenceTest {

    @Autowired
    MemberRepository memberRepository;
    @Autowired
    ConferenceRepository conferenceRepository;

    @Test
    public void test() {
        Member member = Member.builder()
                .name("hanwool")
                .nickName("aaaa")
                .friends(new ArrayList<>())
                .build();

        Member member2 = Member.builder()
                .name("hanwool2")
                .nickName("aaaa2")
                .friends(new ArrayList<>())
                .memberConferenceList(new ArrayList<>())
                .build();


        memberRepository.save(member);
        memberRepository.save(member2);
        Conference conference = Conference.createConference("맨시티vs맨유", "아아아", member, Conference_category.SOCCER);
        conferenceRepository.save(conference);

        member2.enterConference(conference);
    }
}