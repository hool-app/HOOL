package com.ssafy.hool.controller.point;

import com.ssafy.hool.dto.deal_history.DealHistoryCreateDto;
import com.ssafy.hool.dto.deal_history.DealHistoryResponseDto;
import com.ssafy.hool.dto.response.ResponseDto;
import com.ssafy.hool.service.point.DealHistoryService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/deal")
@RequiredArgsConstructor
public class DealController {

    private final DealHistoryService dealHistoryService;

    @ApiOperation(value = "이모지 구매", notes = "이모지 거래 (거래 포인트, 구매자아이디(PK), 판매자아이디(PK), 이모지상점아이디(PK))")
    @PostMapping
    public ResponseEntity createConference(@RequestBody DealHistoryCreateDto dealHistoryCreateDto){
        return new ResponseEntity<ResponseDto>(new ResponseDto<DealHistoryResponseDto>(200, "success", dealHistoryService.makeDeal(dealHistoryCreateDto)), HttpStatus.OK);
    }

}
