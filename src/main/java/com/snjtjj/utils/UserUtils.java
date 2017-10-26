
package com.snjtjj.utils;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.Date;
import java.util.List;

import com.snjtjj.common.security.JwtUser;
import com.snjtjj.entity.*;
import com.snjtjj.mapper.*;
import org.springframework.security.core.context.SecurityContextHolder;

/**
 * 用户工具类
 */
public class UserUtils {

	public static UserMapper userMapper = SpringUtil.getBean(UserMapper.class);

	public static RoleMapper roleMapper = SpringUtil.getBean(RoleMapper.class);

	public static SystemInfoMapper systemInfoMapper = SpringUtil.getBean(SystemInfoMapper.class);

	public static OrganizationMapper organizationMapper = SpringUtil.getBean(OrganizationMapper.class);

	public static AreaMapper areaMapper = SpringUtil.getBean(AreaMapper.class);

	public static final String USER_CACHE = "userCache";
	public static final String USER_CACHE_ID_ = "id_";
	public static final String USER_CACHE_LOGIN_NAME_ = "ln";
	public static final String USER_CACHE_LIST_BY_OFFICE_ID_ = "oid_";

	public static final String CACHE_ROLE_LIST = "roleList";
	public static final String CACHE_MENU_LIST = "menuList";
	public static final String CACHE_AREA_LIST = "areaList";
	public static final String CACHE_OFFICE_LIST = "officeList";
	public static final String CACHE_OFFICE_ALL_LIST = "officeAllList";
	
	/**
	 * 根据ID获取用户
	 * @param id
	 * @return 取不到返回null
	 */
	public static User get(String id){
//		User user = (User)CacheUtils.get(USER_CACHE, USER_CACHE_ID_ + id);
//		if (user ==  null){
		User user = userMapper.selectByPrimaryKey(id);
		if (user == null){
			return null;
		}
//			user.setRoleList(roleDao.findList(new Role(user)));
//			CacheUtils.put(USER_CACHE, USER_CACHE_ID_ + user.getId(), user);
//			CacheUtils.put(USER_CACHE, USER_CACHE_LOGIN_NAME_ + user.getLoginName(), user);
//		}
		return user;
	}
	
	/**
	 * 根据登录名获取用户
	 * @param loginName
	 * @return 取不到返回null
	 */
	public static User getByLoginName(String loginName){
//		User user = (User)CacheUtils.get(USER_CACHE, USER_CACHE_LOGIN_NAME_ + loginName);
//		if (user == null){
//			user = userDao.getByLoginName(new User(null, loginName));
//			if (user == null){
//				return null;
//			}
//			user.setRoleList(roleDao.findList(new Role(user)));
//			CacheUtils.put(USER_CACHE, USER_CACHE_ID_ + user.getId(), user);
//			CacheUtils.put(USER_CACHE, USER_CACHE_LOGIN_NAME_ + user.getLoginName(), user);
//		}
//		return user;
		return null;
	}
	
	/**
	 * 清除当前用户缓存
	 */
	public static void clearCache(){
		removeCache(CACHE_ROLE_LIST);
		removeCache(CACHE_MENU_LIST);
		removeCache(CACHE_AREA_LIST);
		removeCache(CACHE_OFFICE_LIST);
		removeCache(CACHE_OFFICE_ALL_LIST);
		UserUtils.clearCache(getUser());
	}
	
	/**
	 * 清除指定用户缓存
	 * @param user
	 */
	public static void clearCache(User user){
//		CacheUtils.remove(USER_CACHE, USER_CACHE_ID_ + user.getId());
//		CacheUtils.remove(USER_CACHE, USER_CACHE_LOGIN_NAME_ + user.getLoginName());
//		CacheUtils.remove(USER_CACHE, USER_CACHE_LOGIN_NAME_ + user.getOldLoginName());
//		if (user.getOffice() != null && user.getOffice().getId() != null){
//			CacheUtils.remove(USER_CACHE, USER_CACHE_LIST_BY_OFFICE_ID_ + user.getOffice().getId());
//		}
	}
	
	/**
	 * 获取当前用户
	 * @return 取不到返回 new User()
	 */
	public static User getUser(){
		JwtUser jwtUser = (JwtUser) SecurityContextHolder.getContext().getAuthentication() .getPrincipal();
		if (jwtUser!=null&&jwtUser.getUser()!=null){
			User user = get(jwtUser.getUser().getId());
			if (user != null){
				return user;
			}
			return new User();
		}
		// 如果没有登录，则返回实例化空的User对象。
		return new User();
	}

	/**
	 * 获取用户所在组织机构层级
	 * 0:区
	 * 1:镇，乡
	 * 2:村，社区
	 */
	public static String getUserOrgAreaLevel(){
		String level = "";
		String simpleCode = getUserAreaSimpleCode();
		if(StringUtils.isNotBlank(simpleCode)){
			switch (simpleCode.length()){
				case 6: level = "0";break;
				case 9: level = "1";break;
				case 12: level = "2";break;
			}
		}
		return level;
	}

	/**
	 * 获取用户的行政区划代码
	 */
	public static String getUserAreaSimpleCode(){
		//根据用户id获取用户所属组织，得到用户所在组织对应的行政区划代码
		User user = getUser();
		String orgId = user.getOrgId();
		String simpleCode = "";
		if (StringUtils.isNotBlank(orgId)) {
			Organization organization = organizationMapper.selectByPrimaryKey(orgId);
			String code = organization.getCode();
			//根据code查询用户对应的行政区划信息
			if (StringUtils.isNotBlank(code)) {
					Area area = areaMapper.selectByPrimaryKey(code);
					if(area!=null) {
						simpleCode = area.getSimpleCode();
					}
			}
		}
		return simpleCode;
	}

	/**
	 * 获取用户所在单位下属所有的行政区划代码
	 */
	public static List<String> getUserAreaCodeList() {
		String simpleCode = getUserAreaSimpleCode();
		if (StringUtils.isNotBlank(simpleCode)) {
			//查询该行政区划代码下面的所有行政区划
			AreaExample areaExample = new AreaExample();
			AreaExample.Criteria criteria = areaExample.createCriteria();
			criteria.andCodeLike(simpleCode + "%");
			List<Area> areaList = areaMapper.selectByExample(areaExample);
			try {
				List<String> codeList = Collections3.extractToList(areaList, "code");
				return codeList;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return null;
	}

	/**
	 * 获取当前用户角色列表
	 * @return
	 */
	public static List<Role> getRoleList(){
		return roleMapper.selectByUserId(getUser().getId());
	}

	/**
	 * 获取当前用户授权的制度
	 * @return
	 */
	public static List<SystemInfo> getSystemInfoList(){
		List<Role> roleList = getRoleList();
		if(roleList!=null&&roleList.size()>0){
			return systemInfoMapper.getSystemInfoListByRoleId(roleList.get(0).getId());
		}
		return null;
	}
	
	/**
	 * 获取当前用户授权菜单
	 * @return
	 */
//	public static List<Menu> getMenuList(){
//		List<Menu> menuList = (List<Menu>)getCache(CACHE_MENU_LIST);
//		if (menuList == null){
//			User user = getUser();
//			if (user.isAdmin()){
//				menuList = menuDao.findAllList(new Menu());
//			}else{
//				Menu m = new Menu();
//				m.setUserId(user.getId());
//				menuList = menuDao.findByUserId(m);
//			}
//			putCache(CACHE_MENU_LIST, menuList);
//		}
//		return menuList;
//	}
	
	/**
	 * 获取当前用户授权菜单
	 * @return
	 */
//	public static Menu getTopMenu(){
//		Menu topMenu =  getMenuList().get(0);
//		return topMenu;
//	}


	
	// ============== User Cache ==============
	
	public static Object getCache(String key) {
		return getCache(key, null);
	}
	
	public static Object getCache(String key, Object defaultValue) {
//		Object obj = getCacheMap().get(key);
//		Object obj = getSession().getAttribute(key);
//		return obj==null?defaultValue:obj;
		return null;
	}

	public static void putCache(String key, Object value) {
//		getCacheMap().put(key, value);
//		getSession().setAttribute(key, value);
	}

	public static void removeCache(String key) {
//		getCacheMap().remove(key);
//		getSession().removeAttribute(key);
	}
	
	public static String getTime(Date date){
		StringBuffer time = new StringBuffer();
        Date date2 = new Date();
        long temp = date2.getTime() - date.getTime();    
        long days = temp / 1000 / 3600/24;                //相差小时数
        if(days>0){
        	time.append(days+"天");
        }
        long temp1 = temp % (1000 * 3600*24);
        long hours = temp1 / 1000 / 3600;                //相差小时数
        if(days>0 || hours>0){
        	time.append(hours+"小时");
        }
        long temp2 = temp1 % (1000 * 3600);
        long mins = temp2 / 1000 / 60;                    //相差分钟数
        time.append(mins + "分钟");
        return  time.toString();
	}

	
	/**
	 * 导出Excel调用,根据姓名转换为ID
	 */
	public static User getByUserName(String name){
//		User u = new User();
//		u.setName(name);
//		List<User> list = userDao.findList(u);
//		if(list.size()>0){
//			return list.get(0);
//		}else{
//			return new User();
//		}
		return null;
	}
	/**
	 * 导出Excel使用，根据名字转换为id
	 */
//	public static Office getByOfficeName(String name){
//		Office o = new Office();
//		o.setName(name);
//		List<Office> list = officeDao.findList(o);
//		if(list.size()>0){
//			return list.get(0);
//		}else{
//			return new Office();
//		}
//	}
	
}
