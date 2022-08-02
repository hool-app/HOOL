package com.ssafy.hool.dto.game;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GameSaveResultDto {
    // Game
    private Long gameId;
    private boolean result;
}
