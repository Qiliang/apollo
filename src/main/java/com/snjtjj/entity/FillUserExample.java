package com.snjtjj.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class FillUserExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public FillUserExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(String value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(String value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(String value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(String value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(String value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(String value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLike(String value) {
            addCriterion("id like", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotLike(String value) {
            addCriterion("id not like", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<String> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<String> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(String value1, String value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(String value1, String value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andObjIdIsNull() {
            addCriterion("obj_id is null");
            return (Criteria) this;
        }

        public Criteria andObjIdIsNotNull() {
            addCriterion("obj_id is not null");
            return (Criteria) this;
        }

        public Criteria andObjIdEqualTo(String value) {
            addCriterion("obj_id =", value, "objId");
            return (Criteria) this;
        }

        public Criteria andObjIdNotEqualTo(String value) {
            addCriterion("obj_id <>", value, "objId");
            return (Criteria) this;
        }

        public Criteria andObjIdGreaterThan(String value) {
            addCriterion("obj_id >", value, "objId");
            return (Criteria) this;
        }

        public Criteria andObjIdGreaterThanOrEqualTo(String value) {
            addCriterion("obj_id >=", value, "objId");
            return (Criteria) this;
        }

        public Criteria andObjIdLessThan(String value) {
            addCriterion("obj_id <", value, "objId");
            return (Criteria) this;
        }

        public Criteria andObjIdLessThanOrEqualTo(String value) {
            addCriterion("obj_id <=", value, "objId");
            return (Criteria) this;
        }

        public Criteria andObjIdLike(String value) {
            addCriterion("obj_id like", value, "objId");
            return (Criteria) this;
        }

        public Criteria andObjIdNotLike(String value) {
            addCriterion("obj_id not like", value, "objId");
            return (Criteria) this;
        }

        public Criteria andObjIdIn(List<String> values) {
            addCriterion("obj_id in", values, "objId");
            return (Criteria) this;
        }

        public Criteria andObjIdNotIn(List<String> values) {
            addCriterion("obj_id not in", values, "objId");
            return (Criteria) this;
        }

        public Criteria andObjIdBetween(String value1, String value2) {
            addCriterion("obj_id between", value1, value2, "objId");
            return (Criteria) this;
        }

        public Criteria andObjIdNotBetween(String value1, String value2) {
            addCriterion("obj_id not between", value1, value2, "objId");
            return (Criteria) this;
        }

        public Criteria andObjTypeIsNull() {
            addCriterion("obj_type is null");
            return (Criteria) this;
        }

        public Criteria andObjTypeIsNotNull() {
            addCriterion("obj_type is not null");
            return (Criteria) this;
        }

        public Criteria andObjTypeEqualTo(String value) {
            addCriterion("obj_type =", value, "objType");
            return (Criteria) this;
        }

        public Criteria andObjTypeNotEqualTo(String value) {
            addCriterion("obj_type <>", value, "objType");
            return (Criteria) this;
        }

        public Criteria andObjTypeGreaterThan(String value) {
            addCriterion("obj_type >", value, "objType");
            return (Criteria) this;
        }

        public Criteria andObjTypeGreaterThanOrEqualTo(String value) {
            addCriterion("obj_type >=", value, "objType");
            return (Criteria) this;
        }

        public Criteria andObjTypeLessThan(String value) {
            addCriterion("obj_type <", value, "objType");
            return (Criteria) this;
        }

        public Criteria andObjTypeLessThanOrEqualTo(String value) {
            addCriterion("obj_type <=", value, "objType");
            return (Criteria) this;
        }

        public Criteria andObjTypeLike(String value) {
            addCriterion("obj_type like", value, "objType");
            return (Criteria) this;
        }

        public Criteria andObjTypeNotLike(String value) {
            addCriterion("obj_type not like", value, "objType");
            return (Criteria) this;
        }

        public Criteria andObjTypeIn(List<String> values) {
            addCriterion("obj_type in", values, "objType");
            return (Criteria) this;
        }

        public Criteria andObjTypeNotIn(List<String> values) {
            addCriterion("obj_type not in", values, "objType");
            return (Criteria) this;
        }

        public Criteria andObjTypeBetween(String value1, String value2) {
            addCriterion("obj_type between", value1, value2, "objType");
            return (Criteria) this;
        }

        public Criteria andObjTypeNotBetween(String value1, String value2) {
            addCriterion("obj_type not between", value1, value2, "objType");
            return (Criteria) this;
        }

        public Criteria andLoginPasswordIsNull() {
            addCriterion("login_password is null");
            return (Criteria) this;
        }

        public Criteria andLoginPasswordIsNotNull() {
            addCriterion("login_password is not null");
            return (Criteria) this;
        }

        public Criteria andLoginPasswordEqualTo(String value) {
            addCriterion("login_password =", value, "loginPassword");
            return (Criteria) this;
        }

        public Criteria andLoginPasswordNotEqualTo(String value) {
            addCriterion("login_password <>", value, "loginPassword");
            return (Criteria) this;
        }

        public Criteria andLoginPasswordGreaterThan(String value) {
            addCriterion("login_password >", value, "loginPassword");
            return (Criteria) this;
        }

        public Criteria andLoginPasswordGreaterThanOrEqualTo(String value) {
            addCriterion("login_password >=", value, "loginPassword");
            return (Criteria) this;
        }

        public Criteria andLoginPasswordLessThan(String value) {
            addCriterion("login_password <", value, "loginPassword");
            return (Criteria) this;
        }

        public Criteria andLoginPasswordLessThanOrEqualTo(String value) {
            addCriterion("login_password <=", value, "loginPassword");
            return (Criteria) this;
        }

        public Criteria andLoginPasswordLike(String value) {
            addCriterion("login_password like", value, "loginPassword");
            return (Criteria) this;
        }

        public Criteria andLoginPasswordNotLike(String value) {
            addCriterion("login_password not like", value, "loginPassword");
            return (Criteria) this;
        }

        public Criteria andLoginPasswordIn(List<String> values) {
            addCriterion("login_password in", values, "loginPassword");
            return (Criteria) this;
        }

        public Criteria andLoginPasswordNotIn(List<String> values) {
            addCriterion("login_password not in", values, "loginPassword");
            return (Criteria) this;
        }

        public Criteria andLoginPasswordBetween(String value1, String value2) {
            addCriterion("login_password between", value1, value2, "loginPassword");
            return (Criteria) this;
        }

        public Criteria andLoginPasswordNotBetween(String value1, String value2) {
            addCriterion("login_password not between", value1, value2, "loginPassword");
            return (Criteria) this;
        }

        public Criteria andCreateByIsNull() {
            addCriterion("create_by is null");
            return (Criteria) this;
        }

        public Criteria andCreateByIsNotNull() {
            addCriterion("create_by is not null");
            return (Criteria) this;
        }

        public Criteria andCreateByEqualTo(String value) {
            addCriterion("create_by =", value, "createBy");
            return (Criteria) this;
        }

        public Criteria andCreateByNotEqualTo(String value) {
            addCriterion("create_by <>", value, "createBy");
            return (Criteria) this;
        }

        public Criteria andCreateByGreaterThan(String value) {
            addCriterion("create_by >", value, "createBy");
            return (Criteria) this;
        }

        public Criteria andCreateByGreaterThanOrEqualTo(String value) {
            addCriterion("create_by >=", value, "createBy");
            return (Criteria) this;
        }

        public Criteria andCreateByLessThan(String value) {
            addCriterion("create_by <", value, "createBy");
            return (Criteria) this;
        }

        public Criteria andCreateByLessThanOrEqualTo(String value) {
            addCriterion("create_by <=", value, "createBy");
            return (Criteria) this;
        }

        public Criteria andCreateByLike(String value) {
            addCriterion("create_by like", value, "createBy");
            return (Criteria) this;
        }

        public Criteria andCreateByNotLike(String value) {
            addCriterion("create_by not like", value, "createBy");
            return (Criteria) this;
        }

        public Criteria andCreateByIn(List<String> values) {
            addCriterion("create_by in", values, "createBy");
            return (Criteria) this;
        }

        public Criteria andCreateByNotIn(List<String> values) {
            addCriterion("create_by not in", values, "createBy");
            return (Criteria) this;
        }

        public Criteria andCreateByBetween(String value1, String value2) {
            addCriterion("create_by between", value1, value2, "createBy");
            return (Criteria) this;
        }

        public Criteria andCreateByNotBetween(String value1, String value2) {
            addCriterion("create_by not between", value1, value2, "createBy");
            return (Criteria) this;
        }

        public Criteria andCreateDateIsNull() {
            addCriterion("create_date is null");
            return (Criteria) this;
        }

        public Criteria andCreateDateIsNotNull() {
            addCriterion("create_date is not null");
            return (Criteria) this;
        }

        public Criteria andCreateDateEqualTo(Date value) {
            addCriterion("create_date =", value, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateNotEqualTo(Date value) {
            addCriterion("create_date <>", value, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateGreaterThan(Date value) {
            addCriterion("create_date >", value, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateGreaterThanOrEqualTo(Date value) {
            addCriterion("create_date >=", value, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateLessThan(Date value) {
            addCriterion("create_date <", value, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateLessThanOrEqualTo(Date value) {
            addCriterion("create_date <=", value, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateIn(List<Date> values) {
            addCriterion("create_date in", values, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateNotIn(List<Date> values) {
            addCriterion("create_date not in", values, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateBetween(Date value1, Date value2) {
            addCriterion("create_date between", value1, value2, "createDate");
            return (Criteria) this;
        }

        public Criteria andCreateDateNotBetween(Date value1, Date value2) {
            addCriterion("create_date not between", value1, value2, "createDate");
            return (Criteria) this;
        }

        public Criteria andUpdateByIsNull() {
            addCriterion("update_by is null");
            return (Criteria) this;
        }

        public Criteria andUpdateByIsNotNull() {
            addCriterion("update_by is not null");
            return (Criteria) this;
        }

        public Criteria andUpdateByEqualTo(String value) {
            addCriterion("update_by =", value, "updateBy");
            return (Criteria) this;
        }

        public Criteria andUpdateByNotEqualTo(String value) {
            addCriterion("update_by <>", value, "updateBy");
            return (Criteria) this;
        }

        public Criteria andUpdateByGreaterThan(String value) {
            addCriterion("update_by >", value, "updateBy");
            return (Criteria) this;
        }

        public Criteria andUpdateByGreaterThanOrEqualTo(String value) {
            addCriterion("update_by >=", value, "updateBy");
            return (Criteria) this;
        }

        public Criteria andUpdateByLessThan(String value) {
            addCriterion("update_by <", value, "updateBy");
            return (Criteria) this;
        }

        public Criteria andUpdateByLessThanOrEqualTo(String value) {
            addCriterion("update_by <=", value, "updateBy");
            return (Criteria) this;
        }

        public Criteria andUpdateByLike(String value) {
            addCriterion("update_by like", value, "updateBy");
            return (Criteria) this;
        }

        public Criteria andUpdateByNotLike(String value) {
            addCriterion("update_by not like", value, "updateBy");
            return (Criteria) this;
        }

        public Criteria andUpdateByIn(List<String> values) {
            addCriterion("update_by in", values, "updateBy");
            return (Criteria) this;
        }

        public Criteria andUpdateByNotIn(List<String> values) {
            addCriterion("update_by not in", values, "updateBy");
            return (Criteria) this;
        }

        public Criteria andUpdateByBetween(String value1, String value2) {
            addCriterion("update_by between", value1, value2, "updateBy");
            return (Criteria) this;
        }

        public Criteria andUpdateByNotBetween(String value1, String value2) {
            addCriterion("update_by not between", value1, value2, "updateBy");
            return (Criteria) this;
        }

        public Criteria andUpdateDateIsNull() {
            addCriterion("update_date is null");
            return (Criteria) this;
        }

        public Criteria andUpdateDateIsNotNull() {
            addCriterion("update_date is not null");
            return (Criteria) this;
        }

        public Criteria andUpdateDateEqualTo(Date value) {
            addCriterion("update_date =", value, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateNotEqualTo(Date value) {
            addCriterion("update_date <>", value, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateGreaterThan(Date value) {
            addCriterion("update_date >", value, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateGreaterThanOrEqualTo(Date value) {
            addCriterion("update_date >=", value, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateLessThan(Date value) {
            addCriterion("update_date <", value, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateLessThanOrEqualTo(Date value) {
            addCriterion("update_date <=", value, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateIn(List<Date> values) {
            addCriterion("update_date in", values, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateNotIn(List<Date> values) {
            addCriterion("update_date not in", values, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateBetween(Date value1, Date value2) {
            addCriterion("update_date between", value1, value2, "updateDate");
            return (Criteria) this;
        }

        public Criteria andUpdateDateNotBetween(Date value1, Date value2) {
            addCriterion("update_date not between", value1, value2, "updateDate");
            return (Criteria) this;
        }

        public Criteria andDelFlagIsNull() {
            addCriterion("del_flag is null");
            return (Criteria) this;
        }

        public Criteria andDelFlagIsNotNull() {
            addCriterion("del_flag is not null");
            return (Criteria) this;
        }

        public Criteria andDelFlagEqualTo(String value) {
            addCriterion("del_flag =", value, "delFlag");
            return (Criteria) this;
        }

        public Criteria andDelFlagNotEqualTo(String value) {
            addCriterion("del_flag <>", value, "delFlag");
            return (Criteria) this;
        }

        public Criteria andDelFlagGreaterThan(String value) {
            addCriterion("del_flag >", value, "delFlag");
            return (Criteria) this;
        }

        public Criteria andDelFlagGreaterThanOrEqualTo(String value) {
            addCriterion("del_flag >=", value, "delFlag");
            return (Criteria) this;
        }

        public Criteria andDelFlagLessThan(String value) {
            addCriterion("del_flag <", value, "delFlag");
            return (Criteria) this;
        }

        public Criteria andDelFlagLessThanOrEqualTo(String value) {
            addCriterion("del_flag <=", value, "delFlag");
            return (Criteria) this;
        }

        public Criteria andDelFlagLike(String value) {
            addCriterion("del_flag like", value, "delFlag");
            return (Criteria) this;
        }

        public Criteria andDelFlagNotLike(String value) {
            addCriterion("del_flag not like", value, "delFlag");
            return (Criteria) this;
        }

        public Criteria andDelFlagIn(List<String> values) {
            addCriterion("del_flag in", values, "delFlag");
            return (Criteria) this;
        }

        public Criteria andDelFlagNotIn(List<String> values) {
            addCriterion("del_flag not in", values, "delFlag");
            return (Criteria) this;
        }

        public Criteria andDelFlagBetween(String value1, String value2) {
            addCriterion("del_flag between", value1, value2, "delFlag");
            return (Criteria) this;
        }

        public Criteria andDelFlagNotBetween(String value1, String value2) {
            addCriterion("del_flag not between", value1, value2, "delFlag");
            return (Criteria) this;
        }

        public Criteria andLoginUserNameIsNull() {
            addCriterion("login_user_name is null");
            return (Criteria) this;
        }

        public Criteria andLoginUserNameIsNotNull() {
            addCriterion("login_user_name is not null");
            return (Criteria) this;
        }

        public Criteria andLoginUserNameEqualTo(String value) {
            addCriterion("login_user_name =", value, "loginUserName");
            return (Criteria) this;
        }

        public Criteria andLoginUserNameNotEqualTo(String value) {
            addCriterion("login_user_name <>", value, "loginUserName");
            return (Criteria) this;
        }

        public Criteria andLoginUserNameGreaterThan(String value) {
            addCriterion("login_user_name >", value, "loginUserName");
            return (Criteria) this;
        }

        public Criteria andLoginUserNameGreaterThanOrEqualTo(String value) {
            addCriterion("login_user_name >=", value, "loginUserName");
            return (Criteria) this;
        }

        public Criteria andLoginUserNameLessThan(String value) {
            addCriterion("login_user_name <", value, "loginUserName");
            return (Criteria) this;
        }

        public Criteria andLoginUserNameLessThanOrEqualTo(String value) {
            addCriterion("login_user_name <=", value, "loginUserName");
            return (Criteria) this;
        }

        public Criteria andLoginUserNameLike(String value) {
            addCriterion("login_user_name like", value, "loginUserName");
            return (Criteria) this;
        }

        public Criteria andLoginUserNameNotLike(String value) {
            addCriterion("login_user_name not like", value, "loginUserName");
            return (Criteria) this;
        }

        public Criteria andLoginUserNameIn(List<String> values) {
            addCriterion("login_user_name in", values, "loginUserName");
            return (Criteria) this;
        }

        public Criteria andLoginUserNameNotIn(List<String> values) {
            addCriterion("login_user_name not in", values, "loginUserName");
            return (Criteria) this;
        }

        public Criteria andLoginUserNameBetween(String value1, String value2) {
            addCriterion("login_user_name between", value1, value2, "loginUserName");
            return (Criteria) this;
        }

        public Criteria andLoginUserNameNotBetween(String value1, String value2) {
            addCriterion("login_user_name not between", value1, value2, "loginUserName");
            return (Criteria) this;
        }

        public Criteria andMobileIsNull() {
            addCriterion("mobile is null");
            return (Criteria) this;
        }

        public Criteria andMobileIsNotNull() {
            addCriterion("mobile is not null");
            return (Criteria) this;
        }

        public Criteria andMobileEqualTo(String value) {
            addCriterion("mobile =", value, "mobile");
            return (Criteria) this;
        }

        public Criteria andMobileNotEqualTo(String value) {
            addCriterion("mobile <>", value, "mobile");
            return (Criteria) this;
        }

        public Criteria andMobileGreaterThan(String value) {
            addCriterion("mobile >", value, "mobile");
            return (Criteria) this;
        }

        public Criteria andMobileGreaterThanOrEqualTo(String value) {
            addCriterion("mobile >=", value, "mobile");
            return (Criteria) this;
        }

        public Criteria andMobileLessThan(String value) {
            addCriterion("mobile <", value, "mobile");
            return (Criteria) this;
        }

        public Criteria andMobileLessThanOrEqualTo(String value) {
            addCriterion("mobile <=", value, "mobile");
            return (Criteria) this;
        }

        public Criteria andMobileLike(String value) {
            addCriterion("mobile like", value, "mobile");
            return (Criteria) this;
        }

        public Criteria andMobileNotLike(String value) {
            addCriterion("mobile not like", value, "mobile");
            return (Criteria) this;
        }

        public Criteria andMobileIn(List<String> values) {
            addCriterion("mobile in", values, "mobile");
            return (Criteria) this;
        }

        public Criteria andMobileNotIn(List<String> values) {
            addCriterion("mobile not in", values, "mobile");
            return (Criteria) this;
        }

        public Criteria andMobileBetween(String value1, String value2) {
            addCriterion("mobile between", value1, value2, "mobile");
            return (Criteria) this;
        }

        public Criteria andMobileNotBetween(String value1, String value2) {
            addCriterion("mobile not between", value1, value2, "mobile");
            return (Criteria) this;
        }

        public Criteria andLeaderMobileIsNull() {
            addCriterion("leader_mobile is null");
            return (Criteria) this;
        }

        public Criteria andLeaderMobileIsNotNull() {
            addCriterion("leader_mobile is not null");
            return (Criteria) this;
        }

        public Criteria andLeaderMobileEqualTo(String value) {
            addCriterion("leader_mobile =", value, "leaderMobile");
            return (Criteria) this;
        }

        public Criteria andLeaderMobileNotEqualTo(String value) {
            addCriterion("leader_mobile <>", value, "leaderMobile");
            return (Criteria) this;
        }

        public Criteria andLeaderMobileGreaterThan(String value) {
            addCriterion("leader_mobile >", value, "leaderMobile");
            return (Criteria) this;
        }

        public Criteria andLeaderMobileGreaterThanOrEqualTo(String value) {
            addCriterion("leader_mobile >=", value, "leaderMobile");
            return (Criteria) this;
        }

        public Criteria andLeaderMobileLessThan(String value) {
            addCriterion("leader_mobile <", value, "leaderMobile");
            return (Criteria) this;
        }

        public Criteria andLeaderMobileLessThanOrEqualTo(String value) {
            addCriterion("leader_mobile <=", value, "leaderMobile");
            return (Criteria) this;
        }

        public Criteria andLeaderMobileLike(String value) {
            addCriterion("leader_mobile like", value, "leaderMobile");
            return (Criteria) this;
        }

        public Criteria andLeaderMobileNotLike(String value) {
            addCriterion("leader_mobile not like", value, "leaderMobile");
            return (Criteria) this;
        }

        public Criteria andLeaderMobileIn(List<String> values) {
            addCriterion("leader_mobile in", values, "leaderMobile");
            return (Criteria) this;
        }

        public Criteria andLeaderMobileNotIn(List<String> values) {
            addCriterion("leader_mobile not in", values, "leaderMobile");
            return (Criteria) this;
        }

        public Criteria andLeaderMobileBetween(String value1, String value2) {
            addCriterion("leader_mobile between", value1, value2, "leaderMobile");
            return (Criteria) this;
        }

        public Criteria andLeaderMobileNotBetween(String value1, String value2) {
            addCriterion("leader_mobile not between", value1, value2, "leaderMobile");
            return (Criteria) this;
        }

        public Criteria andEmailIsNull() {
            addCriterion("email is null");
            return (Criteria) this;
        }

        public Criteria andEmailIsNotNull() {
            addCriterion("email is not null");
            return (Criteria) this;
        }

        public Criteria andEmailEqualTo(String value) {
            addCriterion("email =", value, "email");
            return (Criteria) this;
        }

        public Criteria andEmailNotEqualTo(String value) {
            addCriterion("email <>", value, "email");
            return (Criteria) this;
        }

        public Criteria andEmailGreaterThan(String value) {
            addCriterion("email >", value, "email");
            return (Criteria) this;
        }

        public Criteria andEmailGreaterThanOrEqualTo(String value) {
            addCriterion("email >=", value, "email");
            return (Criteria) this;
        }

        public Criteria andEmailLessThan(String value) {
            addCriterion("email <", value, "email");
            return (Criteria) this;
        }

        public Criteria andEmailLessThanOrEqualTo(String value) {
            addCriterion("email <=", value, "email");
            return (Criteria) this;
        }

        public Criteria andEmailLike(String value) {
            addCriterion("email like", value, "email");
            return (Criteria) this;
        }

        public Criteria andEmailNotLike(String value) {
            addCriterion("email not like", value, "email");
            return (Criteria) this;
        }

        public Criteria andEmailIn(List<String> values) {
            addCriterion("email in", values, "email");
            return (Criteria) this;
        }

        public Criteria andEmailNotIn(List<String> values) {
            addCriterion("email not in", values, "email");
            return (Criteria) this;
        }

        public Criteria andEmailBetween(String value1, String value2) {
            addCriterion("email between", value1, value2, "email");
            return (Criteria) this;
        }

        public Criteria andEmailNotBetween(String value1, String value2) {
            addCriterion("email not between", value1, value2, "email");
            return (Criteria) this;
        }

        public Criteria andFillNameIsNull() {
            addCriterion("fill_name is null");
            return (Criteria) this;
        }

        public Criteria andFillNameIsNotNull() {
            addCriterion("fill_name is not null");
            return (Criteria) this;
        }

        public Criteria andFillNameEqualTo(String value) {
            addCriterion("fill_name =", value, "fillName");
            return (Criteria) this;
        }

        public Criteria andFillNameNotEqualTo(String value) {
            addCriterion("fill_name <>", value, "fillName");
            return (Criteria) this;
        }

        public Criteria andFillNameGreaterThan(String value) {
            addCriterion("fill_name >", value, "fillName");
            return (Criteria) this;
        }

        public Criteria andFillNameGreaterThanOrEqualTo(String value) {
            addCriterion("fill_name >=", value, "fillName");
            return (Criteria) this;
        }

        public Criteria andFillNameLessThan(String value) {
            addCriterion("fill_name <", value, "fillName");
            return (Criteria) this;
        }

        public Criteria andFillNameLessThanOrEqualTo(String value) {
            addCriterion("fill_name <=", value, "fillName");
            return (Criteria) this;
        }

        public Criteria andFillNameLike(String value) {
            addCriterion("fill_name like", value, "fillName");
            return (Criteria) this;
        }

        public Criteria andFillNameNotLike(String value) {
            addCriterion("fill_name not like", value, "fillName");
            return (Criteria) this;
        }

        public Criteria andFillNameIn(List<String> values) {
            addCriterion("fill_name in", values, "fillName");
            return (Criteria) this;
        }

        public Criteria andFillNameNotIn(List<String> values) {
            addCriterion("fill_name not in", values, "fillName");
            return (Criteria) this;
        }

        public Criteria andFillNameBetween(String value1, String value2) {
            addCriterion("fill_name between", value1, value2, "fillName");
            return (Criteria) this;
        }

        public Criteria andFillNameNotBetween(String value1, String value2) {
            addCriterion("fill_name not between", value1, value2, "fillName");
            return (Criteria) this;
        }

        public Criteria andPasswordResetDateIsNull() {
            addCriterion("password_reset_date is null");
            return (Criteria) this;
        }

        public Criteria andPasswordResetDateIsNotNull() {
            addCriterion("password_reset_date is not null");
            return (Criteria) this;
        }

        public Criteria andPasswordResetDateEqualTo(Date value) {
            addCriterion("password_reset_date =", value, "passwordResetDate");
            return (Criteria) this;
        }

        public Criteria andPasswordResetDateNotEqualTo(Date value) {
            addCriterion("password_reset_date <>", value, "passwordResetDate");
            return (Criteria) this;
        }

        public Criteria andPasswordResetDateGreaterThan(Date value) {
            addCriterion("password_reset_date >", value, "passwordResetDate");
            return (Criteria) this;
        }

        public Criteria andPasswordResetDateGreaterThanOrEqualTo(Date value) {
            addCriterion("password_reset_date >=", value, "passwordResetDate");
            return (Criteria) this;
        }

        public Criteria andPasswordResetDateLessThan(Date value) {
            addCriterion("password_reset_date <", value, "passwordResetDate");
            return (Criteria) this;
        }

        public Criteria andPasswordResetDateLessThanOrEqualTo(Date value) {
            addCriterion("password_reset_date <=", value, "passwordResetDate");
            return (Criteria) this;
        }

        public Criteria andPasswordResetDateIn(List<Date> values) {
            addCriterion("password_reset_date in", values, "passwordResetDate");
            return (Criteria) this;
        }

        public Criteria andPasswordResetDateNotIn(List<Date> values) {
            addCriterion("password_reset_date not in", values, "passwordResetDate");
            return (Criteria) this;
        }

        public Criteria andPasswordResetDateBetween(Date value1, Date value2) {
            addCriterion("password_reset_date between", value1, value2, "passwordResetDate");
            return (Criteria) this;
        }

        public Criteria andPasswordResetDateNotBetween(Date value1, Date value2) {
            addCriterion("password_reset_date not between", value1, value2, "passwordResetDate");
            return (Criteria) this;
        }

        public Criteria andFddbrIsNull() {
            addCriterion("fddbr is null");
            return (Criteria) this;
        }

        public Criteria andFddbrIsNotNull() {
            addCriterion("fddbr is not null");
            return (Criteria) this;
        }

        public Criteria andFddbrEqualTo(String value) {
            addCriterion("fddbr =", value, "fddbr");
            return (Criteria) this;
        }

        public Criteria andFddbrNotEqualTo(String value) {
            addCriterion("fddbr <>", value, "fddbr");
            return (Criteria) this;
        }

        public Criteria andFddbrGreaterThan(String value) {
            addCriterion("fddbr >", value, "fddbr");
            return (Criteria) this;
        }

        public Criteria andFddbrGreaterThanOrEqualTo(String value) {
            addCriterion("fddbr >=", value, "fddbr");
            return (Criteria) this;
        }

        public Criteria andFddbrLessThan(String value) {
            addCriterion("fddbr <", value, "fddbr");
            return (Criteria) this;
        }

        public Criteria andFddbrLessThanOrEqualTo(String value) {
            addCriterion("fddbr <=", value, "fddbr");
            return (Criteria) this;
        }

        public Criteria andFddbrLike(String value) {
            addCriterion("fddbr like", value, "fddbr");
            return (Criteria) this;
        }

        public Criteria andFddbrNotLike(String value) {
            addCriterion("fddbr not like", value, "fddbr");
            return (Criteria) this;
        }

        public Criteria andFddbrIn(List<String> values) {
            addCriterion("fddbr in", values, "fddbr");
            return (Criteria) this;
        }

        public Criteria andFddbrNotIn(List<String> values) {
            addCriterion("fddbr not in", values, "fddbr");
            return (Criteria) this;
        }

        public Criteria andFddbrBetween(String value1, String value2) {
            addCriterion("fddbr between", value1, value2, "fddbr");
            return (Criteria) this;
        }

        public Criteria andFddbrNotBetween(String value1, String value2) {
            addCriterion("fddbr not between", value1, value2, "fddbr");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}