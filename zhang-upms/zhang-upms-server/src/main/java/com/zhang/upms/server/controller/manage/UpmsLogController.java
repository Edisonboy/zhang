package com.zhang.upms.server.controller.manage;

import com.zhang.common.base.BaseController;
import com.zhang.upms.common.constant.UpmsResult;
import com.zhang.upms.common.constant.UpmsResultConstant;
import com.zhang.upms.dao.model.UpmsLog;
import com.zhang.upms.dao.model.UpmsLogExample;
import com.zhang.upms.rpc.api.UpmsLogService;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang.StringUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Edison
 * @ClassName:
 * @Desc: 日志管理控制器
 * @date 2017/8/6
 * @history
 */
public class UpmsLogController extends BaseController {

    private static Logger _log = LoggerFactory.getLogger(UpmsLogController.class);

    @Autowired
    private UpmsLogService upmsLogService;

    @ApiOperation(value = "日志首页")
    @RequiresPermissions("upms:log:read")
    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index() {
        return "/manage/log/index.jsp";
    }

    @ApiOperation(value = "日志列表")
    @RequiresPermissions("upms:log:read")
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    @ResponseBody
    public Object list(
            @RequestParam(required = false, defaultValue = "0", value = "offset") int offset,
            @RequestParam(required = false, defaultValue = "10", value = "limit") int limit,
            @RequestParam(required = false, defaultValue = "", value = "search") String search,
            @RequestParam(required = false, value = "sort") String sort,
            @RequestParam(required = false, value = "order") String order) {
        UpmsLogExample upmsLogExample = new UpmsLogExample();
        if (!StringUtils.isBlank(sort) && !StringUtils.isBlank(order)) {
            upmsLogExample.setOrderByClause(sort + " " + order);
        }
        if (StringUtils.isNotBlank(search)) {
            upmsLogExample.or()
                    .andDescriptionLike("%" + search + "%");
        }
        List<UpmsLog> rows = upmsLogService.selectByExampleForOffsetPage(upmsLogExample, offset, limit);
        long total = upmsLogService.countByExample(upmsLogExample);
        Map<String, Object> result = new HashMap<>();
        result.put("rows", rows);
        result.put("total", total);
        return result;
    }

    @ApiOperation(value = "删除日志")
    @RequiresPermissions("upms:log:delete")
    @RequestMapping(value = "/delete/{ids}", method = RequestMethod.GET)
    @ResponseBody
    public Object delete(@PathVariable("ids") String ids) {
        int count = upmsLogService.deleteByPrimaryKeys(ids);
        return new UpmsResult(UpmsResultConstant.SUCCESS, count);
    }

}
