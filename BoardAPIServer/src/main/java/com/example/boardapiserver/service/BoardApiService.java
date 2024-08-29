package com.example.boardapiserver.service;

import com.example.boardapiserver.dto.BoardDTO;

import java.util.List;

public interface BoardApiService {
    List<BoardDTO> selectBoardList() throws Exception;
}
