package com.snjtjj.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class RptTabExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public RptTabExample() {
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

        public Criteria andSysteminfoidIsNull() {
            addCriterion("systeminfoid is null");
            return (Criteria) this;
        }

        public Criteria andSysteminfoidIsNotNull() {
            addCriterion("systeminfoid is not null");
            return (Criteria) this;
        }

        public Criteria andSysteminfoidEqualTo(String value) {
            addCriterion("systeminfoid =", value, "systeminfoid");
            return (Criteria) this;
        }

        public Criteria andSysteminfoidNotEqualTo(String value) {
            addCriterion("systeminfoid <>", value, "systeminfoid");
            return (Criteria) this;
        }

        public Criteria andSysteminfoidGreaterThan(String value) {
            addCriterion("systeminfoid >", value, "systeminfoid");
            return (Criteria) this;
        }

        public Criteria andSysteminfoidGreaterThanOrEqualTo(String value) {
            addCriterion("systeminfoid >=", value, "systeminfoid");
            return (Criteria) this;
        }

        public Criteria andSysteminfoidLessThan(String value) {
            addCriterion("systeminfoid <", value, "systeminfoid");
            return (Criteria) this;
        }

        public Criteria andSysteminfoidLessThanOrEqualTo(String value) {
            addCriterion("systeminfoid <=", value, "systeminfoid");
            return (Criteria) this;
        }

        public Criteria andSysteminfoidLike(String value) {
            addCriterion("systeminfoid like", value, "systeminfoid");
            return (Criteria) this;
        }

        public Criteria andSysteminfoidNotLike(String value) {
            addCriterion("systeminfoid not like", value, "systeminfoid");
            return (Criteria) this;
        }

        public Criteria andSysteminfoidIn(List<String> values) {
            addCriterion("systeminfoid in", values, "systeminfoid");
            return (Criteria) this;
        }

        public Criteria andSysteminfoidNotIn(List<String> values) {
            addCriterion("systeminfoid not in", values, "systeminfoid");
            return (Criteria) this;
        }

        public Criteria andSysteminfoidBetween(String value1, String value2) {
            addCriterion("systeminfoid between", value1, value2, "systeminfoid");
            return (Criteria) this;
        }

        public Criteria andSysteminfoidNotBetween(String value1, String value2) {
            addCriterion("systeminfoid not between", value1, value2, "systeminfoid");
            return (Criteria) this;
        }

        public Criteria andTabcodeIsNull() {
            addCriterion("tabcode is null");
            return (Criteria) this;
        }

        public Criteria andTabcodeIsNotNull() {
            addCriterion("tabcode is not null");
            return (Criteria) this;
        }

        public Criteria andTabcodeEqualTo(String value) {
            addCriterion("tabcode =", value, "tabcode");
            return (Criteria) this;
        }

        public Criteria andTabcodeNotEqualTo(String value) {
            addCriterion("tabcode <>", value, "tabcode");
            return (Criteria) this;
        }

        public Criteria andTabcodeGreaterThan(String value) {
            addCriterion("tabcode >", value, "tabcode");
            return (Criteria) this;
        }

        public Criteria andTabcodeGreaterThanOrEqualTo(String value) {
            addCriterion("tabcode >=", value, "tabcode");
            return (Criteria) this;
        }

        public Criteria andTabcodeLessThan(String value) {
            addCriterion("tabcode <", value, "tabcode");
            return (Criteria) this;
        }

        public Criteria andTabcodeLessThanOrEqualTo(String value) {
            addCriterion("tabcode <=", value, "tabcode");
            return (Criteria) this;
        }

        public Criteria andTabcodeLike(String value) {
            addCriterion("tabcode like", value, "tabcode");
            return (Criteria) this;
        }

        public Criteria andTabcodeNotLike(String value) {
            addCriterion("tabcode not like", value, "tabcode");
            return (Criteria) this;
        }

        public Criteria andTabcodeIn(List<String> values) {
            addCriterion("tabcode in", values, "tabcode");
            return (Criteria) this;
        }

        public Criteria andTabcodeNotIn(List<String> values) {
            addCriterion("tabcode not in", values, "tabcode");
            return (Criteria) this;
        }

        public Criteria andTabcodeBetween(String value1, String value2) {
            addCriterion("tabcode between", value1, value2, "tabcode");
            return (Criteria) this;
        }

        public Criteria andTabcodeNotBetween(String value1, String value2) {
            addCriterion("tabcode not between", value1, value2, "tabcode");
            return (Criteria) this;
        }

        public Criteria andTabnameIsNull() {
            addCriterion("tabname is null");
            return (Criteria) this;
        }

        public Criteria andTabnameIsNotNull() {
            addCriterion("tabname is not null");
            return (Criteria) this;
        }

        public Criteria andTabnameEqualTo(String value) {
            addCriterion("tabname =", value, "tabname");
            return (Criteria) this;
        }

        public Criteria andTabnameNotEqualTo(String value) {
            addCriterion("tabname <>", value, "tabname");
            return (Criteria) this;
        }

        public Criteria andTabnameGreaterThan(String value) {
            addCriterion("tabname >", value, "tabname");
            return (Criteria) this;
        }

        public Criteria andTabnameGreaterThanOrEqualTo(String value) {
            addCriterion("tabname >=", value, "tabname");
            return (Criteria) this;
        }

        public Criteria andTabnameLessThan(String value) {
            addCriterion("tabname <", value, "tabname");
            return (Criteria) this;
        }

        public Criteria andTabnameLessThanOrEqualTo(String value) {
            addCriterion("tabname <=", value, "tabname");
            return (Criteria) this;
        }

        public Criteria andTabnameLike(String value) {
            addCriterion("tabname like", value, "tabname");
            return (Criteria) this;
        }

        public Criteria andTabnameNotLike(String value) {
            addCriterion("tabname not like", value, "tabname");
            return (Criteria) this;
        }

        public Criteria andTabnameIn(List<String> values) {
            addCriterion("tabname in", values, "tabname");
            return (Criteria) this;
        }

        public Criteria andTabnameNotIn(List<String> values) {
            addCriterion("tabname not in", values, "tabname");
            return (Criteria) this;
        }

        public Criteria andTabnameBetween(String value1, String value2) {
            addCriterion("tabname between", value1, value2, "tabname");
            return (Criteria) this;
        }

        public Criteria andTabnameNotBetween(String value1, String value2) {
            addCriterion("tabname not between", value1, value2, "tabname");
            return (Criteria) this;
        }

        public Criteria andMakedeptIsNull() {
            addCriterion("makedept is null");
            return (Criteria) this;
        }

        public Criteria andMakedeptIsNotNull() {
            addCriterion("makedept is not null");
            return (Criteria) this;
        }

        public Criteria andMakedeptEqualTo(String value) {
            addCriterion("makedept =", value, "makedept");
            return (Criteria) this;
        }

        public Criteria andMakedeptNotEqualTo(String value) {
            addCriterion("makedept <>", value, "makedept");
            return (Criteria) this;
        }

        public Criteria andMakedeptGreaterThan(String value) {
            addCriterion("makedept >", value, "makedept");
            return (Criteria) this;
        }

        public Criteria andMakedeptGreaterThanOrEqualTo(String value) {
            addCriterion("makedept >=", value, "makedept");
            return (Criteria) this;
        }

        public Criteria andMakedeptLessThan(String value) {
            addCriterion("makedept <", value, "makedept");
            return (Criteria) this;
        }

        public Criteria andMakedeptLessThanOrEqualTo(String value) {
            addCriterion("makedept <=", value, "makedept");
            return (Criteria) this;
        }

        public Criteria andMakedeptLike(String value) {
            addCriterion("makedept like", value, "makedept");
            return (Criteria) this;
        }

        public Criteria andMakedeptNotLike(String value) {
            addCriterion("makedept not like", value, "makedept");
            return (Criteria) this;
        }

        public Criteria andMakedeptIn(List<String> values) {
            addCriterion("makedept in", values, "makedept");
            return (Criteria) this;
        }

        public Criteria andMakedeptNotIn(List<String> values) {
            addCriterion("makedept not in", values, "makedept");
            return (Criteria) this;
        }

        public Criteria andMakedeptBetween(String value1, String value2) {
            addCriterion("makedept between", value1, value2, "makedept");
            return (Criteria) this;
        }

        public Criteria andMakedeptNotBetween(String value1, String value2) {
            addCriterion("makedept not between", value1, value2, "makedept");
            return (Criteria) this;
        }

        public Criteria andApprovalnoIsNull() {
            addCriterion("approvalno is null");
            return (Criteria) this;
        }

        public Criteria andApprovalnoIsNotNull() {
            addCriterion("approvalno is not null");
            return (Criteria) this;
        }

        public Criteria andApprovalnoEqualTo(String value) {
            addCriterion("approvalno =", value, "approvalno");
            return (Criteria) this;
        }

        public Criteria andApprovalnoNotEqualTo(String value) {
            addCriterion("approvalno <>", value, "approvalno");
            return (Criteria) this;
        }

        public Criteria andApprovalnoGreaterThan(String value) {
            addCriterion("approvalno >", value, "approvalno");
            return (Criteria) this;
        }

        public Criteria andApprovalnoGreaterThanOrEqualTo(String value) {
            addCriterion("approvalno >=", value, "approvalno");
            return (Criteria) this;
        }

        public Criteria andApprovalnoLessThan(String value) {
            addCriterion("approvalno <", value, "approvalno");
            return (Criteria) this;
        }

        public Criteria andApprovalnoLessThanOrEqualTo(String value) {
            addCriterion("approvalno <=", value, "approvalno");
            return (Criteria) this;
        }

        public Criteria andApprovalnoLike(String value) {
            addCriterion("approvalno like", value, "approvalno");
            return (Criteria) this;
        }

        public Criteria andApprovalnoNotLike(String value) {
            addCriterion("approvalno not like", value, "approvalno");
            return (Criteria) this;
        }

        public Criteria andApprovalnoIn(List<String> values) {
            addCriterion("approvalno in", values, "approvalno");
            return (Criteria) this;
        }

        public Criteria andApprovalnoNotIn(List<String> values) {
            addCriterion("approvalno not in", values, "approvalno");
            return (Criteria) this;
        }

        public Criteria andApprovalnoBetween(String value1, String value2) {
            addCriterion("approvalno between", value1, value2, "approvalno");
            return (Criteria) this;
        }

        public Criteria andApprovalnoNotBetween(String value1, String value2) {
            addCriterion("approvalno not between", value1, value2, "approvalno");
            return (Criteria) this;
        }

        public Criteria andValiditydateIsNull() {
            addCriterion("validitydate is null");
            return (Criteria) this;
        }

        public Criteria andValiditydateIsNotNull() {
            addCriterion("validitydate is not null");
            return (Criteria) this;
        }

        public Criteria andValiditydateEqualTo(String value) {
            addCriterion("validitydate =", value, "validitydate");
            return (Criteria) this;
        }

        public Criteria andValiditydateNotEqualTo(String value) {
            addCriterion("validitydate <>", value, "validitydate");
            return (Criteria) this;
        }

        public Criteria andValiditydateGreaterThan(String value) {
            addCriterion("validitydate >", value, "validitydate");
            return (Criteria) this;
        }

        public Criteria andValiditydateGreaterThanOrEqualTo(String value) {
            addCriterion("validitydate >=", value, "validitydate");
            return (Criteria) this;
        }

        public Criteria andValiditydateLessThan(String value) {
            addCriterion("validitydate <", value, "validitydate");
            return (Criteria) this;
        }

        public Criteria andValiditydateLessThanOrEqualTo(String value) {
            addCriterion("validitydate <=", value, "validitydate");
            return (Criteria) this;
        }

        public Criteria andValiditydateLike(String value) {
            addCriterion("validitydate like", value, "validitydate");
            return (Criteria) this;
        }

        public Criteria andValiditydateNotLike(String value) {
            addCriterion("validitydate not like", value, "validitydate");
            return (Criteria) this;
        }

        public Criteria andValiditydateIn(List<String> values) {
            addCriterion("validitydate in", values, "validitydate");
            return (Criteria) this;
        }

        public Criteria andValiditydateNotIn(List<String> values) {
            addCriterion("validitydate not in", values, "validitydate");
            return (Criteria) this;
        }

        public Criteria andValiditydateBetween(String value1, String value2) {
            addCriterion("validitydate between", value1, value2, "validitydate");
            return (Criteria) this;
        }

        public Criteria andValiditydateNotBetween(String value1, String value2) {
            addCriterion("validitydate not between", value1, value2, "validitydate");
            return (Criteria) this;
        }

        public Criteria andCommentIsNull() {
            addCriterion("comment is null");
            return (Criteria) this;
        }

        public Criteria andCommentIsNotNull() {
            addCriterion("comment is not null");
            return (Criteria) this;
        }

        public Criteria andCommentEqualTo(String value) {
            addCriterion("comment =", value, "comment");
            return (Criteria) this;
        }

        public Criteria andCommentNotEqualTo(String value) {
            addCriterion("comment <>", value, "comment");
            return (Criteria) this;
        }

        public Criteria andCommentGreaterThan(String value) {
            addCriterion("comment >", value, "comment");
            return (Criteria) this;
        }

        public Criteria andCommentGreaterThanOrEqualTo(String value) {
            addCriterion("comment >=", value, "comment");
            return (Criteria) this;
        }

        public Criteria andCommentLessThan(String value) {
            addCriterion("comment <", value, "comment");
            return (Criteria) this;
        }

        public Criteria andCommentLessThanOrEqualTo(String value) {
            addCriterion("comment <=", value, "comment");
            return (Criteria) this;
        }

        public Criteria andCommentLike(String value) {
            addCriterion("comment like", value, "comment");
            return (Criteria) this;
        }

        public Criteria andCommentNotLike(String value) {
            addCriterion("comment not like", value, "comment");
            return (Criteria) this;
        }

        public Criteria andCommentIn(List<String> values) {
            addCriterion("comment in", values, "comment");
            return (Criteria) this;
        }

        public Criteria andCommentNotIn(List<String> values) {
            addCriterion("comment not in", values, "comment");
            return (Criteria) this;
        }

        public Criteria andCommentBetween(String value1, String value2) {
            addCriterion("comment between", value1, value2, "comment");
            return (Criteria) this;
        }

        public Criteria andCommentNotBetween(String value1, String value2) {
            addCriterion("comment not between", value1, value2, "comment");
            return (Criteria) this;
        }

        public Criteria andTabdeepIsNull() {
            addCriterion("tabdeep is null");
            return (Criteria) this;
        }

        public Criteria andTabdeepIsNotNull() {
            addCriterion("tabdeep is not null");
            return (Criteria) this;
        }

        public Criteria andTabdeepEqualTo(Integer value) {
            addCriterion("tabdeep =", value, "tabdeep");
            return (Criteria) this;
        }

        public Criteria andTabdeepNotEqualTo(Integer value) {
            addCriterion("tabdeep <>", value, "tabdeep");
            return (Criteria) this;
        }

        public Criteria andTabdeepGreaterThan(Integer value) {
            addCriterion("tabdeep >", value, "tabdeep");
            return (Criteria) this;
        }

        public Criteria andTabdeepGreaterThanOrEqualTo(Integer value) {
            addCriterion("tabdeep >=", value, "tabdeep");
            return (Criteria) this;
        }

        public Criteria andTabdeepLessThan(Integer value) {
            addCriterion("tabdeep <", value, "tabdeep");
            return (Criteria) this;
        }

        public Criteria andTabdeepLessThanOrEqualTo(Integer value) {
            addCriterion("tabdeep <=", value, "tabdeep");
            return (Criteria) this;
        }

        public Criteria andTabdeepIn(List<Integer> values) {
            addCriterion("tabdeep in", values, "tabdeep");
            return (Criteria) this;
        }

        public Criteria andTabdeepNotIn(List<Integer> values) {
            addCriterion("tabdeep not in", values, "tabdeep");
            return (Criteria) this;
        }

        public Criteria andTabdeepBetween(Integer value1, Integer value2) {
            addCriterion("tabdeep between", value1, value2, "tabdeep");
            return (Criteria) this;
        }

        public Criteria andTabdeepNotBetween(Integer value1, Integer value2) {
            addCriterion("tabdeep not between", value1, value2, "tabdeep");
            return (Criteria) this;
        }

        public Criteria andTabdeep1IsNull() {
            addCriterion("tabdeep1 is null");
            return (Criteria) this;
        }

        public Criteria andTabdeep1IsNotNull() {
            addCriterion("tabdeep1 is not null");
            return (Criteria) this;
        }

        public Criteria andTabdeep1EqualTo(Integer value) {
            addCriterion("tabdeep1 =", value, "tabdeep1");
            return (Criteria) this;
        }

        public Criteria andTabdeep1NotEqualTo(Integer value) {
            addCriterion("tabdeep1 <>", value, "tabdeep1");
            return (Criteria) this;
        }

        public Criteria andTabdeep1GreaterThan(Integer value) {
            addCriterion("tabdeep1 >", value, "tabdeep1");
            return (Criteria) this;
        }

        public Criteria andTabdeep1GreaterThanOrEqualTo(Integer value) {
            addCriterion("tabdeep1 >=", value, "tabdeep1");
            return (Criteria) this;
        }

        public Criteria andTabdeep1LessThan(Integer value) {
            addCriterion("tabdeep1 <", value, "tabdeep1");
            return (Criteria) this;
        }

        public Criteria andTabdeep1LessThanOrEqualTo(Integer value) {
            addCriterion("tabdeep1 <=", value, "tabdeep1");
            return (Criteria) this;
        }

        public Criteria andTabdeep1In(List<Integer> values) {
            addCriterion("tabdeep1 in", values, "tabdeep1");
            return (Criteria) this;
        }

        public Criteria andTabdeep1NotIn(List<Integer> values) {
            addCriterion("tabdeep1 not in", values, "tabdeep1");
            return (Criteria) this;
        }

        public Criteria andTabdeep1Between(Integer value1, Integer value2) {
            addCriterion("tabdeep1 between", value1, value2, "tabdeep1");
            return (Criteria) this;
        }

        public Criteria andTabdeep1NotBetween(Integer value1, Integer value2) {
            addCriterion("tabdeep1 not between", value1, value2, "tabdeep1");
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