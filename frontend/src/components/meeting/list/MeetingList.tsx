import { Navigate } from "@tanstack/react-location";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import useRoomEnter from "hooks/useRoomEnter";

import styled from "styled-components";

import {
  getMeetingList,
  postCheckPasswordBeforeEnterMeetingRoom,
  postEnterMeetingRoom,
} from "api/meeting";

import MeetingListItem from "./MeetingListItem";
import Loading from "components/Loading";

import { QUERY_KEYS } from "constant";

import { MeetingRoomType } from "types/MeetingRoomType";
import { UserInfoType } from "types/UserInfoType";

type PropsType = {
  isState: boolean;
  isSport: string;
};

const MeetingList = ({ isState, isSport }: PropsType) => {
  const userInfo = useQueryClient().getQueryData<UserInfoType>([
    QUERY_KEYS.USER,
  ]);
  const newList: Array<any> = [];
  const { handleEnterRoom } = useRoomEnter();
  const {
    data: allMeetingList,
    isLoading: allMeetingListIsLoading,
    isError: allMeetingListIsError,
  } = useQuery([QUERY_KEYS.MEETINGS], () => getMeetingList());
  const allList = allMeetingList?.data;
  isSport === ""
    ? allList.map((el: MeetingRoomType) => {
        //filter 적용안되서 map으로 작성, filter 적용안되는 이유를 모르겠음
        newList.push(el);
      })
    : allList.map((el: MeetingRoomType) => {
        if (el.category === isSport) {
          newList.push(el);
        }
      });

  const { mutate: mutatePublic } = useMutation(postEnterMeetingRoom, {
    onSuccess: (data, { conferenceId }) => {
      userInfo && handleEnterRoom(conferenceId, userInfo.nickName, data);
    },
    onError: (error) => {
      // err.response.data.message ? alert(err.response.data.message) :
      alert(error);
    },
  });
  const { mutate: mutatePrivate } = useMutation(
    postCheckPasswordBeforeEnterMeetingRoom,
    {
      onSuccess: (data, { conferenceId }) => {
        userInfo && handleEnterRoom(conferenceId, userInfo.nickName, data);
      },
      onError: (error) => {
        // err.response.data.message ? alert(err.response.data.message) :
        alert(error);
      },
    }
  );

  if (allMeetingListIsLoading) return <Loading />;
  if (allMeetingListIsError) return <Navigate to={"/error"} />;

  return (
    <>
      {isState ? (
        <ItemList>
          {newList?.map((el: MeetingRoomType) => {
            const { conferenceId, isPublic } = el;
            return userInfo ? (
              <ItemLink
                key={conferenceId}
                onClick={() => {
                  isPublic
                    ? (() => {
                        mutatePublic({
                          conferenceId: conferenceId,
                        });
                      })()
                    : (() => {
                        const password =
                          prompt("비공개 방 비밀번호를 입력해주세요");
                        mutatePrivate({
                          conferenceId,
                          password: password ? password : "",
                        });
                      })();
                }}
              >
                <MeetingListItem {...el} />
              </ItemLink>
            ) : (
              <div onClick={() => alert("로그인이 필요한 서비스입니다.")}>
                <MeetingListItem {...el} />
              </div>
            );
          })}
        </ItemList>
      ) : (
        <ItemList></ItemList>
      )}
    </>
  );
};

const ItemList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));
  row-gap: 2rem;
  column-gap: 1.5vw;
  margin-top: 2rem;
  justify-content: center;
`;
const ItemLink = styled.li`
  cursor: pointer;
`;
export default MeetingList;
