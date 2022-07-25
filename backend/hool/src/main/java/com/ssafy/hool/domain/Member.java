package com.ssafy.hool.domain;

import com.ssafy.hool.dto.MemberCreateDto;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Setter
@Entity
public class Member extends BaseEntity {

    @Id
    @GeneratedValue
    @Column(name = "member_id")
    private Long id;

    private String name;

    @Column(unique = true)
    private String memberIdName; // 로그인 아이디
    private String password; // 로그인 비밀번호

    @Column(unique = true)
    private String nickName; // 화면 내에서 아이디
    private int point;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Member_conference> memberConferenceList = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Game_history> gameHistoryList = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Friend> friends = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Member_emoji> emojis = new ArrayList<>();

    public static Member createMember(MemberCreateDto memberCreateDto) {
        Member member = Member.builder()
                .name(memberCreateDto.getName())
                .memberIdName(memberCreateDto.getMemberIdName())
                .password(memberCreateDto.getPassword())
                .friends(new ArrayList<>())
                .memberConferenceList(new ArrayList<>())
                .gameHistoryList(new ArrayList<>())
                .build();
        return member;
    }

    public void enterConference(Conference conference) {
        Member_conference memberConference = Member_conference.builder()
                .member(this)
                .build();
        memberConferenceList.add(memberConference);
        memberConference.setConference(conference);
    }


    // 수정 필요
    public void addFriend(Friend friend) {
        this.getFriends().add(friend);
        friend.setMember(this);
    }
}

