package com.example.boardapiserver.service;

import com.example.boardapiserver.dto.BoardDTO;
import com.example.boardapiserver.mapper.BoardApiMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardApiServiceImpl implements BoardApiService{
    @Autowired
    private BoardApiMapper boardApiMapper;

    @Override
    public List<BoardDTO> selectBoardList() throws Exception{
        return boardApiMapper.selectBoardList();
    }
}
