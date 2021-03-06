package com.zhang.cms.dao.mapper;

import com.zhang.cms.dao.model.CmsUser;
import com.zhang.cms.dao.model.CmsUserExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface CmsUserMapper {
    long countByExample(CmsUserExample example);

    int deleteByExample(CmsUserExample example);

    int deleteByPrimaryKey(Integer userId);

    int insert(CmsUser record);

    int insertSelective(CmsUser record);

    List<CmsUser> selectByExample(CmsUserExample example);

    CmsUser selectByPrimaryKey(Integer userId);

    int updateByExampleSelective(@Param("record") CmsUser record, @Param("example") CmsUserExample example);

    int updateByExample(@Param("record") CmsUser record, @Param("example") CmsUserExample example);

    int updateByPrimaryKeySelective(CmsUser record);

    int updateByPrimaryKey(CmsUser record);
}