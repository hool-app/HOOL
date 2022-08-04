package com.ssafy.hool.domain;

import lombok.*;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@AllArgsConstructor
@Builder
@Setter
@Entity
public class Member_conference {

    @Id
    @GeneratedValue
    @Column(name = "member_conference_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "conference_id")
    private Conference conference;

    public static Member_conference createMemberConference(Member member, Conference conference) {
        Member_conference memberConference = Member_conference.builder()
                .member(member)
                .conference(conference)
                .build();
        memberConference.addConference(conference);
        memberConference.addMember(member);
        return memberConference;
    }

    public void addConference(Conference conference){
        this.conference = conference;
        conference.getMemberConferenceList().add(this);
    }

    public void addMember(Member member){
        this.member = member;
        member.getMemberConferenceList().add(this);
    }
}
