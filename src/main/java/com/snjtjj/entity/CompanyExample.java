package com.snjtjj.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class CompanyExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public CompanyExample() {
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

        public Criteria andShxydmIsNull() {
            addCriterion("shxydm is null");
            return (Criteria) this;
        }

        public Criteria andShxydmIsNotNull() {
            addCriterion("shxydm is not null");
            return (Criteria) this;
        }

        public Criteria andShxydmEqualTo(String value) {
            addCriterion("shxydm =", value, "shxydm");
            return (Criteria) this;
        }

        public Criteria andShxydmNotEqualTo(String value) {
            addCriterion("shxydm <>", value, "shxydm");
            return (Criteria) this;
        }

        public Criteria andShxydmGreaterThan(String value) {
            addCriterion("shxydm >", value, "shxydm");
            return (Criteria) this;
        }

        public Criteria andShxydmGreaterThanOrEqualTo(String value) {
            addCriterion("shxydm >=", value, "shxydm");
            return (Criteria) this;
        }

        public Criteria andShxydmLessThan(String value) {
            addCriterion("shxydm <", value, "shxydm");
            return (Criteria) this;
        }

        public Criteria andShxydmLessThanOrEqualTo(String value) {
            addCriterion("shxydm <=", value, "shxydm");
            return (Criteria) this;
        }

        public Criteria andShxydmLike(String value) {
            addCriterion("shxydm like", value, "shxydm");
            return (Criteria) this;
        }

        public Criteria andShxydmNotLike(String value) {
            addCriterion("shxydm not like", value, "shxydm");
            return (Criteria) this;
        }

        public Criteria andShxydmIn(List<String> values) {
            addCriterion("shxydm in", values, "shxydm");
            return (Criteria) this;
        }

        public Criteria andShxydmNotIn(List<String> values) {
            addCriterion("shxydm not in", values, "shxydm");
            return (Criteria) this;
        }

        public Criteria andShxydmBetween(String value1, String value2) {
            addCriterion("shxydm between", value1, value2, "shxydm");
            return (Criteria) this;
        }

        public Criteria andShxydmNotBetween(String value1, String value2) {
            addCriterion("shxydm not between", value1, value2, "shxydm");
            return (Criteria) this;
        }

        public Criteria andZzjgdmIsNull() {
            addCriterion("zzjgdm is null");
            return (Criteria) this;
        }

        public Criteria andZzjgdmIsNotNull() {
            addCriterion("zzjgdm is not null");
            return (Criteria) this;
        }

        public Criteria andZzjgdmEqualTo(String value) {
            addCriterion("zzjgdm =", value, "zzjgdm");
            return (Criteria) this;
        }

        public Criteria andZzjgdmNotEqualTo(String value) {
            addCriterion("zzjgdm <>", value, "zzjgdm");
            return (Criteria) this;
        }

        public Criteria andZzjgdmGreaterThan(String value) {
            addCriterion("zzjgdm >", value, "zzjgdm");
            return (Criteria) this;
        }

        public Criteria andZzjgdmGreaterThanOrEqualTo(String value) {
            addCriterion("zzjgdm >=", value, "zzjgdm");
            return (Criteria) this;
        }

        public Criteria andZzjgdmLessThan(String value) {
            addCriterion("zzjgdm <", value, "zzjgdm");
            return (Criteria) this;
        }

        public Criteria andZzjgdmLessThanOrEqualTo(String value) {
            addCriterion("zzjgdm <=", value, "zzjgdm");
            return (Criteria) this;
        }

        public Criteria andZzjgdmLike(String value) {
            addCriterion("zzjgdm like", value, "zzjgdm");
            return (Criteria) this;
        }

        public Criteria andZzjgdmNotLike(String value) {
            addCriterion("zzjgdm not like", value, "zzjgdm");
            return (Criteria) this;
        }

        public Criteria andZzjgdmIn(List<String> values) {
            addCriterion("zzjgdm in", values, "zzjgdm");
            return (Criteria) this;
        }

        public Criteria andZzjgdmNotIn(List<String> values) {
            addCriterion("zzjgdm not in", values, "zzjgdm");
            return (Criteria) this;
        }

        public Criteria andZzjgdmBetween(String value1, String value2) {
            addCriterion("zzjgdm between", value1, value2, "zzjgdm");
            return (Criteria) this;
        }

        public Criteria andZzjgdmNotBetween(String value1, String value2) {
            addCriterion("zzjgdm not between", value1, value2, "zzjgdm");
            return (Criteria) this;
        }

        public Criteria andXxmcIsNull() {
            addCriterion("xxmc is null");
            return (Criteria) this;
        }

        public Criteria andXxmcIsNotNull() {
            addCriterion("xxmc is not null");
            return (Criteria) this;
        }

        public Criteria andXxmcEqualTo(String value) {
            addCriterion("xxmc =", value, "xxmc");
            return (Criteria) this;
        }

        public Criteria andXxmcNotEqualTo(String value) {
            addCriterion("xxmc <>", value, "xxmc");
            return (Criteria) this;
        }

        public Criteria andXxmcGreaterThan(String value) {
            addCriterion("xxmc >", value, "xxmc");
            return (Criteria) this;
        }

        public Criteria andXxmcGreaterThanOrEqualTo(String value) {
            addCriterion("xxmc >=", value, "xxmc");
            return (Criteria) this;
        }

        public Criteria andXxmcLessThan(String value) {
            addCriterion("xxmc <", value, "xxmc");
            return (Criteria) this;
        }

        public Criteria andXxmcLessThanOrEqualTo(String value) {
            addCriterion("xxmc <=", value, "xxmc");
            return (Criteria) this;
        }

        public Criteria andXxmcLike(String value) {
            addCriterion("xxmc like", value, "xxmc");
            return (Criteria) this;
        }

        public Criteria andXxmcNotLike(String value) {
            addCriterion("xxmc not like", value, "xxmc");
            return (Criteria) this;
        }

        public Criteria andXxmcIn(List<String> values) {
            addCriterion("xxmc in", values, "xxmc");
            return (Criteria) this;
        }

        public Criteria andXxmcNotIn(List<String> values) {
            addCriterion("xxmc not in", values, "xxmc");
            return (Criteria) this;
        }

        public Criteria andXxmcBetween(String value1, String value2) {
            addCriterion("xxmc between", value1, value2, "xxmc");
            return (Criteria) this;
        }

        public Criteria andXxmcNotBetween(String value1, String value2) {
            addCriterion("xxmc not between", value1, value2, "xxmc");
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

        public Criteria andXzqhdmIsNull() {
            addCriterion("xzqhdm is null");
            return (Criteria) this;
        }

        public Criteria andXzqhdmIsNotNull() {
            addCriterion("xzqhdm is not null");
            return (Criteria) this;
        }

        public Criteria andXzqhdmEqualTo(String value) {
            addCriterion("xzqhdm =", value, "xzqhdm");
            return (Criteria) this;
        }

        public Criteria andXzqhdmNotEqualTo(String value) {
            addCriterion("xzqhdm <>", value, "xzqhdm");
            return (Criteria) this;
        }

        public Criteria andXzqhdmGreaterThan(String value) {
            addCriterion("xzqhdm >", value, "xzqhdm");
            return (Criteria) this;
        }

        public Criteria andXzqhdmGreaterThanOrEqualTo(String value) {
            addCriterion("xzqhdm >=", value, "xzqhdm");
            return (Criteria) this;
        }

        public Criteria andXzqhdmLessThan(String value) {
            addCriterion("xzqhdm <", value, "xzqhdm");
            return (Criteria) this;
        }

        public Criteria andXzqhdmLessThanOrEqualTo(String value) {
            addCriterion("xzqhdm <=", value, "xzqhdm");
            return (Criteria) this;
        }

        public Criteria andXzqhdmLike(String value) {
            addCriterion("xzqhdm like", value, "xzqhdm");
            return (Criteria) this;
        }

        public Criteria andXzqhdmNotLike(String value) {
            addCriterion("xzqhdm not like", value, "xzqhdm");
            return (Criteria) this;
        }

        public Criteria andXzqhdmIn(List<String> values) {
            addCriterion("xzqhdm in", values, "xzqhdm");
            return (Criteria) this;
        }

        public Criteria andXzqhdmNotIn(List<String> values) {
            addCriterion("xzqhdm not in", values, "xzqhdm");
            return (Criteria) this;
        }

        public Criteria andXzqhdmBetween(String value1, String value2) {
            addCriterion("xzqhdm between", value1, value2, "xzqhdm");
            return (Criteria) this;
        }

        public Criteria andXzqhdmNotBetween(String value1, String value2) {
            addCriterion("xzqhdm not between", value1, value2, "xzqhdm");
            return (Criteria) this;
        }

        public Criteria andXxdzIsNull() {
            addCriterion("xxdz is null");
            return (Criteria) this;
        }

        public Criteria andXxdzIsNotNull() {
            addCriterion("xxdz is not null");
            return (Criteria) this;
        }

        public Criteria andXxdzEqualTo(String value) {
            addCriterion("xxdz =", value, "xxdz");
            return (Criteria) this;
        }

        public Criteria andXxdzNotEqualTo(String value) {
            addCriterion("xxdz <>", value, "xxdz");
            return (Criteria) this;
        }

        public Criteria andXxdzGreaterThan(String value) {
            addCriterion("xxdz >", value, "xxdz");
            return (Criteria) this;
        }

        public Criteria andXxdzGreaterThanOrEqualTo(String value) {
            addCriterion("xxdz >=", value, "xxdz");
            return (Criteria) this;
        }

        public Criteria andXxdzLessThan(String value) {
            addCriterion("xxdz <", value, "xxdz");
            return (Criteria) this;
        }

        public Criteria andXxdzLessThanOrEqualTo(String value) {
            addCriterion("xxdz <=", value, "xxdz");
            return (Criteria) this;
        }

        public Criteria andXxdzLike(String value) {
            addCriterion("xxdz like", value, "xxdz");
            return (Criteria) this;
        }

        public Criteria andXxdzNotLike(String value) {
            addCriterion("xxdz not like", value, "xxdz");
            return (Criteria) this;
        }

        public Criteria andXxdzIn(List<String> values) {
            addCriterion("xxdz in", values, "xxdz");
            return (Criteria) this;
        }

        public Criteria andXxdzNotIn(List<String> values) {
            addCriterion("xxdz not in", values, "xxdz");
            return (Criteria) this;
        }

        public Criteria andXxdzBetween(String value1, String value2) {
            addCriterion("xxdz between", value1, value2, "xxdz");
            return (Criteria) this;
        }

        public Criteria andXxdzNotBetween(String value1, String value2) {
            addCriterion("xxdz not between", value1, value2, "xxdz");
            return (Criteria) this;
        }

        public Criteria andCtqhIsNull() {
            addCriterion("ctqh is null");
            return (Criteria) this;
        }

        public Criteria andCtqhIsNotNull() {
            addCriterion("ctqh is not null");
            return (Criteria) this;
        }

        public Criteria andCtqhEqualTo(String value) {
            addCriterion("ctqh =", value, "ctqh");
            return (Criteria) this;
        }

        public Criteria andCtqhNotEqualTo(String value) {
            addCriterion("ctqh <>", value, "ctqh");
            return (Criteria) this;
        }

        public Criteria andCtqhGreaterThan(String value) {
            addCriterion("ctqh >", value, "ctqh");
            return (Criteria) this;
        }

        public Criteria andCtqhGreaterThanOrEqualTo(String value) {
            addCriterion("ctqh >=", value, "ctqh");
            return (Criteria) this;
        }

        public Criteria andCtqhLessThan(String value) {
            addCriterion("ctqh <", value, "ctqh");
            return (Criteria) this;
        }

        public Criteria andCtqhLessThanOrEqualTo(String value) {
            addCriterion("ctqh <=", value, "ctqh");
            return (Criteria) this;
        }

        public Criteria andCtqhLike(String value) {
            addCriterion("ctqh like", value, "ctqh");
            return (Criteria) this;
        }

        public Criteria andCtqhNotLike(String value) {
            addCriterion("ctqh not like", value, "ctqh");
            return (Criteria) this;
        }

        public Criteria andCtqhIn(List<String> values) {
            addCriterion("ctqh in", values, "ctqh");
            return (Criteria) this;
        }

        public Criteria andCtqhNotIn(List<String> values) {
            addCriterion("ctqh not in", values, "ctqh");
            return (Criteria) this;
        }

        public Criteria andCtqhBetween(String value1, String value2) {
            addCriterion("ctqh between", value1, value2, "ctqh");
            return (Criteria) this;
        }

        public Criteria andCtqhNotBetween(String value1, String value2) {
            addCriterion("ctqh not between", value1, value2, "ctqh");
            return (Criteria) this;
        }

        public Criteria andGddhIsNull() {
            addCriterion("gddh is null");
            return (Criteria) this;
        }

        public Criteria andGddhIsNotNull() {
            addCriterion("gddh is not null");
            return (Criteria) this;
        }

        public Criteria andGddhEqualTo(String value) {
            addCriterion("gddh =", value, "gddh");
            return (Criteria) this;
        }

        public Criteria andGddhNotEqualTo(String value) {
            addCriterion("gddh <>", value, "gddh");
            return (Criteria) this;
        }

        public Criteria andGddhGreaterThan(String value) {
            addCriterion("gddh >", value, "gddh");
            return (Criteria) this;
        }

        public Criteria andGddhGreaterThanOrEqualTo(String value) {
            addCriterion("gddh >=", value, "gddh");
            return (Criteria) this;
        }

        public Criteria andGddhLessThan(String value) {
            addCriterion("gddh <", value, "gddh");
            return (Criteria) this;
        }

        public Criteria andGddhLessThanOrEqualTo(String value) {
            addCriterion("gddh <=", value, "gddh");
            return (Criteria) this;
        }

        public Criteria andGddhLike(String value) {
            addCriterion("gddh like", value, "gddh");
            return (Criteria) this;
        }

        public Criteria andGddhNotLike(String value) {
            addCriterion("gddh not like", value, "gddh");
            return (Criteria) this;
        }

        public Criteria andGddhIn(List<String> values) {
            addCriterion("gddh in", values, "gddh");
            return (Criteria) this;
        }

        public Criteria andGddhNotIn(List<String> values) {
            addCriterion("gddh not in", values, "gddh");
            return (Criteria) this;
        }

        public Criteria andGddhBetween(String value1, String value2) {
            addCriterion("gddh between", value1, value2, "gddh");
            return (Criteria) this;
        }

        public Criteria andGddhNotBetween(String value1, String value2) {
            addCriterion("gddh not between", value1, value2, "gddh");
            return (Criteria) this;
        }

        public Criteria andHydm11IsNull() {
            addCriterion("hydm_11 is null");
            return (Criteria) this;
        }

        public Criteria andHydm11IsNotNull() {
            addCriterion("hydm_11 is not null");
            return (Criteria) this;
        }

        public Criteria andHydm11EqualTo(String value) {
            addCriterion("hydm_11 =", value, "hydm11");
            return (Criteria) this;
        }

        public Criteria andHydm11NotEqualTo(String value) {
            addCriterion("hydm_11 <>", value, "hydm11");
            return (Criteria) this;
        }

        public Criteria andHydm11GreaterThan(String value) {
            addCriterion("hydm_11 >", value, "hydm11");
            return (Criteria) this;
        }

        public Criteria andHydm11GreaterThanOrEqualTo(String value) {
            addCriterion("hydm_11 >=", value, "hydm11");
            return (Criteria) this;
        }

        public Criteria andHydm11LessThan(String value) {
            addCriterion("hydm_11 <", value, "hydm11");
            return (Criteria) this;
        }

        public Criteria andHydm11LessThanOrEqualTo(String value) {
            addCriterion("hydm_11 <=", value, "hydm11");
            return (Criteria) this;
        }

        public Criteria andHydm11Like(String value) {
            addCriterion("hydm_11 like", value, "hydm11");
            return (Criteria) this;
        }

        public Criteria andHydm11NotLike(String value) {
            addCriterion("hydm_11 not like", value, "hydm11");
            return (Criteria) this;
        }

        public Criteria andHydm11In(List<String> values) {
            addCriterion("hydm_11 in", values, "hydm11");
            return (Criteria) this;
        }

        public Criteria andHydm11NotIn(List<String> values) {
            addCriterion("hydm_11 not in", values, "hydm11");
            return (Criteria) this;
        }

        public Criteria andHydm11Between(String value1, String value2) {
            addCriterion("hydm_11 between", value1, value2, "hydm11");
            return (Criteria) this;
        }

        public Criteria andHydm11NotBetween(String value1, String value2) {
            addCriterion("hydm_11 not between", value1, value2, "hydm11");
            return (Criteria) this;
        }

        public Criteria andZyywhd11IsNull() {
            addCriterion("zyywhd_11 is null");
            return (Criteria) this;
        }

        public Criteria andZyywhd11IsNotNull() {
            addCriterion("zyywhd_11 is not null");
            return (Criteria) this;
        }

        public Criteria andZyywhd11EqualTo(String value) {
            addCriterion("zyywhd_11 =", value, "zyywhd11");
            return (Criteria) this;
        }

        public Criteria andZyywhd11NotEqualTo(String value) {
            addCriterion("zyywhd_11 <>", value, "zyywhd11");
            return (Criteria) this;
        }

        public Criteria andZyywhd11GreaterThan(String value) {
            addCriterion("zyywhd_11 >", value, "zyywhd11");
            return (Criteria) this;
        }

        public Criteria andZyywhd11GreaterThanOrEqualTo(String value) {
            addCriterion("zyywhd_11 >=", value, "zyywhd11");
            return (Criteria) this;
        }

        public Criteria andZyywhd11LessThan(String value) {
            addCriterion("zyywhd_11 <", value, "zyywhd11");
            return (Criteria) this;
        }

        public Criteria andZyywhd11LessThanOrEqualTo(String value) {
            addCriterion("zyywhd_11 <=", value, "zyywhd11");
            return (Criteria) this;
        }

        public Criteria andZyywhd11Like(String value) {
            addCriterion("zyywhd_11 like", value, "zyywhd11");
            return (Criteria) this;
        }

        public Criteria andZyywhd11NotLike(String value) {
            addCriterion("zyywhd_11 not like", value, "zyywhd11");
            return (Criteria) this;
        }

        public Criteria andZyywhd11In(List<String> values) {
            addCriterion("zyywhd_11 in", values, "zyywhd11");
            return (Criteria) this;
        }

        public Criteria andZyywhd11NotIn(List<String> values) {
            addCriterion("zyywhd_11 not in", values, "zyywhd11");
            return (Criteria) this;
        }

        public Criteria andZyywhd11Between(String value1, String value2) {
            addCriterion("zyywhd_11 between", value1, value2, "zyywhd11");
            return (Criteria) this;
        }

        public Criteria andZyywhd11NotBetween(String value1, String value2) {
            addCriterion("zyywhd_11 not between", value1, value2, "zyywhd11");
            return (Criteria) this;
        }

        public Criteria andDjzclxIsNull() {
            addCriterion("djzclx is null");
            return (Criteria) this;
        }

        public Criteria andDjzclxIsNotNull() {
            addCriterion("djzclx is not null");
            return (Criteria) this;
        }

        public Criteria andDjzclxEqualTo(String value) {
            addCriterion("djzclx =", value, "djzclx");
            return (Criteria) this;
        }

        public Criteria andDjzclxNotEqualTo(String value) {
            addCriterion("djzclx <>", value, "djzclx");
            return (Criteria) this;
        }

        public Criteria andDjzclxGreaterThan(String value) {
            addCriterion("djzclx >", value, "djzclx");
            return (Criteria) this;
        }

        public Criteria andDjzclxGreaterThanOrEqualTo(String value) {
            addCriterion("djzclx >=", value, "djzclx");
            return (Criteria) this;
        }

        public Criteria andDjzclxLessThan(String value) {
            addCriterion("djzclx <", value, "djzclx");
            return (Criteria) this;
        }

        public Criteria andDjzclxLessThanOrEqualTo(String value) {
            addCriterion("djzclx <=", value, "djzclx");
            return (Criteria) this;
        }

        public Criteria andDjzclxLike(String value) {
            addCriterion("djzclx like", value, "djzclx");
            return (Criteria) this;
        }

        public Criteria andDjzclxNotLike(String value) {
            addCriterion("djzclx not like", value, "djzclx");
            return (Criteria) this;
        }

        public Criteria andDjzclxIn(List<String> values) {
            addCriterion("djzclx in", values, "djzclx");
            return (Criteria) this;
        }

        public Criteria andDjzclxNotIn(List<String> values) {
            addCriterion("djzclx not in", values, "djzclx");
            return (Criteria) this;
        }

        public Criteria andDjzclxBetween(String value1, String value2) {
            addCriterion("djzclx between", value1, value2, "djzclx");
            return (Criteria) this;
        }

        public Criteria andDjzclxNotBetween(String value1, String value2) {
            addCriterion("djzclx not between", value1, value2, "djzclx");
            return (Criteria) this;
        }

        public Criteria andKynfIsNull() {
            addCriterion("kynf is null");
            return (Criteria) this;
        }

        public Criteria andKynfIsNotNull() {
            addCriterion("kynf is not null");
            return (Criteria) this;
        }

        public Criteria andKynfEqualTo(String value) {
            addCriterion("kynf =", value, "kynf");
            return (Criteria) this;
        }

        public Criteria andKynfNotEqualTo(String value) {
            addCriterion("kynf <>", value, "kynf");
            return (Criteria) this;
        }

        public Criteria andKynfGreaterThan(String value) {
            addCriterion("kynf >", value, "kynf");
            return (Criteria) this;
        }

        public Criteria andKynfGreaterThanOrEqualTo(String value) {
            addCriterion("kynf >=", value, "kynf");
            return (Criteria) this;
        }

        public Criteria andKynfLessThan(String value) {
            addCriterion("kynf <", value, "kynf");
            return (Criteria) this;
        }

        public Criteria andKynfLessThanOrEqualTo(String value) {
            addCriterion("kynf <=", value, "kynf");
            return (Criteria) this;
        }

        public Criteria andKynfLike(String value) {
            addCriterion("kynf like", value, "kynf");
            return (Criteria) this;
        }

        public Criteria andKynfNotLike(String value) {
            addCriterion("kynf not like", value, "kynf");
            return (Criteria) this;
        }

        public Criteria andKynfIn(List<String> values) {
            addCriterion("kynf in", values, "kynf");
            return (Criteria) this;
        }

        public Criteria andKynfNotIn(List<String> values) {
            addCriterion("kynf not in", values, "kynf");
            return (Criteria) this;
        }

        public Criteria andKynfBetween(String value1, String value2) {
            addCriterion("kynf between", value1, value2, "kynf");
            return (Criteria) this;
        }

        public Criteria andKynfNotBetween(String value1, String value2) {
            addCriterion("kynf not between", value1, value2, "kynf");
            return (Criteria) this;
        }

        public Criteria andKyyfIsNull() {
            addCriterion("kyyf is null");
            return (Criteria) this;
        }

        public Criteria andKyyfIsNotNull() {
            addCriterion("kyyf is not null");
            return (Criteria) this;
        }

        public Criteria andKyyfEqualTo(String value) {
            addCriterion("kyyf =", value, "kyyf");
            return (Criteria) this;
        }

        public Criteria andKyyfNotEqualTo(String value) {
            addCriterion("kyyf <>", value, "kyyf");
            return (Criteria) this;
        }

        public Criteria andKyyfGreaterThan(String value) {
            addCriterion("kyyf >", value, "kyyf");
            return (Criteria) this;
        }

        public Criteria andKyyfGreaterThanOrEqualTo(String value) {
            addCriterion("kyyf >=", value, "kyyf");
            return (Criteria) this;
        }

        public Criteria andKyyfLessThan(String value) {
            addCriterion("kyyf <", value, "kyyf");
            return (Criteria) this;
        }

        public Criteria andKyyfLessThanOrEqualTo(String value) {
            addCriterion("kyyf <=", value, "kyyf");
            return (Criteria) this;
        }

        public Criteria andKyyfLike(String value) {
            addCriterion("kyyf like", value, "kyyf");
            return (Criteria) this;
        }

        public Criteria andKyyfNotLike(String value) {
            addCriterion("kyyf not like", value, "kyyf");
            return (Criteria) this;
        }

        public Criteria andKyyfIn(List<String> values) {
            addCriterion("kyyf in", values, "kyyf");
            return (Criteria) this;
        }

        public Criteria andKyyfNotIn(List<String> values) {
            addCriterion("kyyf not in", values, "kyyf");
            return (Criteria) this;
        }

        public Criteria andKyyfBetween(String value1, String value2) {
            addCriterion("kyyf between", value1, value2, "kyyf");
            return (Criteria) this;
        }

        public Criteria andKyyfNotBetween(String value1, String value2) {
            addCriterion("kyyf not between", value1, value2, "kyyf");
            return (Criteria) this;
        }

        public Criteria andZtIsNull() {
            addCriterion("zt is null");
            return (Criteria) this;
        }

        public Criteria andZtIsNotNull() {
            addCriterion("zt is not null");
            return (Criteria) this;
        }

        public Criteria andZtEqualTo(String value) {
            addCriterion("zt =", value, "zt");
            return (Criteria) this;
        }

        public Criteria andZtNotEqualTo(String value) {
            addCriterion("zt <>", value, "zt");
            return (Criteria) this;
        }

        public Criteria andZtGreaterThan(String value) {
            addCriterion("zt >", value, "zt");
            return (Criteria) this;
        }

        public Criteria andZtGreaterThanOrEqualTo(String value) {
            addCriterion("zt >=", value, "zt");
            return (Criteria) this;
        }

        public Criteria andZtLessThan(String value) {
            addCriterion("zt <", value, "zt");
            return (Criteria) this;
        }

        public Criteria andZtLessThanOrEqualTo(String value) {
            addCriterion("zt <=", value, "zt");
            return (Criteria) this;
        }

        public Criteria andZtLike(String value) {
            addCriterion("zt like", value, "zt");
            return (Criteria) this;
        }

        public Criteria andZtNotLike(String value) {
            addCriterion("zt not like", value, "zt");
            return (Criteria) this;
        }

        public Criteria andZtIn(List<String> values) {
            addCriterion("zt in", values, "zt");
            return (Criteria) this;
        }

        public Criteria andZtNotIn(List<String> values) {
            addCriterion("zt not in", values, "zt");
            return (Criteria) this;
        }

        public Criteria andZtBetween(String value1, String value2) {
            addCriterion("zt between", value1, value2, "zt");
            return (Criteria) this;
        }

        public Criteria andZtNotBetween(String value1, String value2) {
            addCriterion("zt not between", value1, value2, "zt");
            return (Criteria) this;
        }

        public Criteria andTjjdmIsNull() {
            addCriterion("tjjdm is null");
            return (Criteria) this;
        }

        public Criteria andTjjdmIsNotNull() {
            addCriterion("tjjdm is not null");
            return (Criteria) this;
        }

        public Criteria andTjjdmEqualTo(String value) {
            addCriterion("tjjdm =", value, "tjjdm");
            return (Criteria) this;
        }

        public Criteria andTjjdmNotEqualTo(String value) {
            addCriterion("tjjdm <>", value, "tjjdm");
            return (Criteria) this;
        }

        public Criteria andTjjdmGreaterThan(String value) {
            addCriterion("tjjdm >", value, "tjjdm");
            return (Criteria) this;
        }

        public Criteria andTjjdmGreaterThanOrEqualTo(String value) {
            addCriterion("tjjdm >=", value, "tjjdm");
            return (Criteria) this;
        }

        public Criteria andTjjdmLessThan(String value) {
            addCriterion("tjjdm <", value, "tjjdm");
            return (Criteria) this;
        }

        public Criteria andTjjdmLessThanOrEqualTo(String value) {
            addCriterion("tjjdm <=", value, "tjjdm");
            return (Criteria) this;
        }

        public Criteria andTjjdmLike(String value) {
            addCriterion("tjjdm like", value, "tjjdm");
            return (Criteria) this;
        }

        public Criteria andTjjdmNotLike(String value) {
            addCriterion("tjjdm not like", value, "tjjdm");
            return (Criteria) this;
        }

        public Criteria andTjjdmIn(List<String> values) {
            addCriterion("tjjdm in", values, "tjjdm");
            return (Criteria) this;
        }

        public Criteria andTjjdmNotIn(List<String> values) {
            addCriterion("tjjdm not in", values, "tjjdm");
            return (Criteria) this;
        }

        public Criteria andTjjdmBetween(String value1, String value2) {
            addCriterion("tjjdm between", value1, value2, "tjjdm");
            return (Criteria) this;
        }

        public Criteria andTjjdmNotBetween(String value1, String value2) {
            addCriterion("tjjdm not between", value1, value2, "tjjdm");
            return (Criteria) this;
        }

        public Criteria andDwlbIsNull() {
            addCriterion("dwlb is null");
            return (Criteria) this;
        }

        public Criteria andDwlbIsNotNull() {
            addCriterion("dwlb is not null");
            return (Criteria) this;
        }

        public Criteria andDwlbEqualTo(String value) {
            addCriterion("dwlb =", value, "dwlb");
            return (Criteria) this;
        }

        public Criteria andDwlbNotEqualTo(String value) {
            addCriterion("dwlb <>", value, "dwlb");
            return (Criteria) this;
        }

        public Criteria andDwlbGreaterThan(String value) {
            addCriterion("dwlb >", value, "dwlb");
            return (Criteria) this;
        }

        public Criteria andDwlbGreaterThanOrEqualTo(String value) {
            addCriterion("dwlb >=", value, "dwlb");
            return (Criteria) this;
        }

        public Criteria andDwlbLessThan(String value) {
            addCriterion("dwlb <", value, "dwlb");
            return (Criteria) this;
        }

        public Criteria andDwlbLessThanOrEqualTo(String value) {
            addCriterion("dwlb <=", value, "dwlb");
            return (Criteria) this;
        }

        public Criteria andDwlbLike(String value) {
            addCriterion("dwlb like", value, "dwlb");
            return (Criteria) this;
        }

        public Criteria andDwlbNotLike(String value) {
            addCriterion("dwlb not like", value, "dwlb");
            return (Criteria) this;
        }

        public Criteria andDwlbIn(List<String> values) {
            addCriterion("dwlb in", values, "dwlb");
            return (Criteria) this;
        }

        public Criteria andDwlbNotIn(List<String> values) {
            addCriterion("dwlb not in", values, "dwlb");
            return (Criteria) this;
        }

        public Criteria andDwlbBetween(String value1, String value2) {
            addCriterion("dwlb between", value1, value2, "dwlb");
            return (Criteria) this;
        }

        public Criteria andDwlbNotBetween(String value1, String value2) {
            addCriterion("dwlb not between", value1, value2, "dwlb");
            return (Criteria) this;
        }

        public Criteria andJglxIsNull() {
            addCriterion("jglx is null");
            return (Criteria) this;
        }

        public Criteria andJglxIsNotNull() {
            addCriterion("jglx is not null");
            return (Criteria) this;
        }

        public Criteria andJglxEqualTo(String value) {
            addCriterion("jglx =", value, "jglx");
            return (Criteria) this;
        }

        public Criteria andJglxNotEqualTo(String value) {
            addCriterion("jglx <>", value, "jglx");
            return (Criteria) this;
        }

        public Criteria andJglxGreaterThan(String value) {
            addCriterion("jglx >", value, "jglx");
            return (Criteria) this;
        }

        public Criteria andJglxGreaterThanOrEqualTo(String value) {
            addCriterion("jglx >=", value, "jglx");
            return (Criteria) this;
        }

        public Criteria andJglxLessThan(String value) {
            addCriterion("jglx <", value, "jglx");
            return (Criteria) this;
        }

        public Criteria andJglxLessThanOrEqualTo(String value) {
            addCriterion("jglx <=", value, "jglx");
            return (Criteria) this;
        }

        public Criteria andJglxLike(String value) {
            addCriterion("jglx like", value, "jglx");
            return (Criteria) this;
        }

        public Criteria andJglxNotLike(String value) {
            addCriterion("jglx not like", value, "jglx");
            return (Criteria) this;
        }

        public Criteria andJglxIn(List<String> values) {
            addCriterion("jglx in", values, "jglx");
            return (Criteria) this;
        }

        public Criteria andJglxNotIn(List<String> values) {
            addCriterion("jglx not in", values, "jglx");
            return (Criteria) this;
        }

        public Criteria andJglxBetween(String value1, String value2) {
            addCriterion("jglx between", value1, value2, "jglx");
            return (Criteria) this;
        }

        public Criteria andJglxNotBetween(String value1, String value2) {
            addCriterion("jglx not between", value1, value2, "jglx");
            return (Criteria) this;
        }

        public Criteria andGsfrxzqhdmIsNull() {
            addCriterion("gsfrxzqhdm is null");
            return (Criteria) this;
        }

        public Criteria andGsfrxzqhdmIsNotNull() {
            addCriterion("gsfrxzqhdm is not null");
            return (Criteria) this;
        }

        public Criteria andGsfrxzqhdmEqualTo(String value) {
            addCriterion("gsfrxzqhdm =", value, "gsfrxzqhdm");
            return (Criteria) this;
        }

        public Criteria andGsfrxzqhdmNotEqualTo(String value) {
            addCriterion("gsfrxzqhdm <>", value, "gsfrxzqhdm");
            return (Criteria) this;
        }

        public Criteria andGsfrxzqhdmGreaterThan(String value) {
            addCriterion("gsfrxzqhdm >", value, "gsfrxzqhdm");
            return (Criteria) this;
        }

        public Criteria andGsfrxzqhdmGreaterThanOrEqualTo(String value) {
            addCriterion("gsfrxzqhdm >=", value, "gsfrxzqhdm");
            return (Criteria) this;
        }

        public Criteria andGsfrxzqhdmLessThan(String value) {
            addCriterion("gsfrxzqhdm <", value, "gsfrxzqhdm");
            return (Criteria) this;
        }

        public Criteria andGsfrxzqhdmLessThanOrEqualTo(String value) {
            addCriterion("gsfrxzqhdm <=", value, "gsfrxzqhdm");
            return (Criteria) this;
        }

        public Criteria andGsfrxzqhdmLike(String value) {
            addCriterion("gsfrxzqhdm like", value, "gsfrxzqhdm");
            return (Criteria) this;
        }

        public Criteria andGsfrxzqhdmNotLike(String value) {
            addCriterion("gsfrxzqhdm not like", value, "gsfrxzqhdm");
            return (Criteria) this;
        }

        public Criteria andGsfrxzqhdmIn(List<String> values) {
            addCriterion("gsfrxzqhdm in", values, "gsfrxzqhdm");
            return (Criteria) this;
        }

        public Criteria andGsfrxzqhdmNotIn(List<String> values) {
            addCriterion("gsfrxzqhdm not in", values, "gsfrxzqhdm");
            return (Criteria) this;
        }

        public Criteria andGsfrxzqhdmBetween(String value1, String value2) {
            addCriterion("gsfrxzqhdm between", value1, value2, "gsfrxzqhdm");
            return (Criteria) this;
        }

        public Criteria andGsfrxzqhdmNotBetween(String value1, String value2) {
            addCriterion("gsfrxzqhdm not between", value1, value2, "gsfrxzqhdm");
            return (Criteria) this;
        }

        public Criteria andGsfrxxmcIsNull() {
            addCriterion("gsfrxxmc is null");
            return (Criteria) this;
        }

        public Criteria andGsfrxxmcIsNotNull() {
            addCriterion("gsfrxxmc is not null");
            return (Criteria) this;
        }

        public Criteria andGsfrxxmcEqualTo(String value) {
            addCriterion("gsfrxxmc =", value, "gsfrxxmc");
            return (Criteria) this;
        }

        public Criteria andGsfrxxmcNotEqualTo(String value) {
            addCriterion("gsfrxxmc <>", value, "gsfrxxmc");
            return (Criteria) this;
        }

        public Criteria andGsfrxxmcGreaterThan(String value) {
            addCriterion("gsfrxxmc >", value, "gsfrxxmc");
            return (Criteria) this;
        }

        public Criteria andGsfrxxmcGreaterThanOrEqualTo(String value) {
            addCriterion("gsfrxxmc >=", value, "gsfrxxmc");
            return (Criteria) this;
        }

        public Criteria andGsfrxxmcLessThan(String value) {
            addCriterion("gsfrxxmc <", value, "gsfrxxmc");
            return (Criteria) this;
        }

        public Criteria andGsfrxxmcLessThanOrEqualTo(String value) {
            addCriterion("gsfrxxmc <=", value, "gsfrxxmc");
            return (Criteria) this;
        }

        public Criteria andGsfrxxmcLike(String value) {
            addCriterion("gsfrxxmc like", value, "gsfrxxmc");
            return (Criteria) this;
        }

        public Criteria andGsfrxxmcNotLike(String value) {
            addCriterion("gsfrxxmc not like", value, "gsfrxxmc");
            return (Criteria) this;
        }

        public Criteria andGsfrxxmcIn(List<String> values) {
            addCriterion("gsfrxxmc in", values, "gsfrxxmc");
            return (Criteria) this;
        }

        public Criteria andGsfrxxmcNotIn(List<String> values) {
            addCriterion("gsfrxxmc not in", values, "gsfrxxmc");
            return (Criteria) this;
        }

        public Criteria andGsfrxxmcBetween(String value1, String value2) {
            addCriterion("gsfrxxmc between", value1, value2, "gsfrxxmc");
            return (Criteria) this;
        }

        public Criteria andGsfrxxmcNotBetween(String value1, String value2) {
            addCriterion("gsfrxxmc not between", value1, value2, "gsfrxxmc");
            return (Criteria) this;
        }

        public Criteria andGsfrxxdzIsNull() {
            addCriterion("gsfrxxdz is null");
            return (Criteria) this;
        }

        public Criteria andGsfrxxdzIsNotNull() {
            addCriterion("gsfrxxdz is not null");
            return (Criteria) this;
        }

        public Criteria andGsfrxxdzEqualTo(String value) {
            addCriterion("gsfrxxdz =", value, "gsfrxxdz");
            return (Criteria) this;
        }

        public Criteria andGsfrxxdzNotEqualTo(String value) {
            addCriterion("gsfrxxdz <>", value, "gsfrxxdz");
            return (Criteria) this;
        }

        public Criteria andGsfrxxdzGreaterThan(String value) {
            addCriterion("gsfrxxdz >", value, "gsfrxxdz");
            return (Criteria) this;
        }

        public Criteria andGsfrxxdzGreaterThanOrEqualTo(String value) {
            addCriterion("gsfrxxdz >=", value, "gsfrxxdz");
            return (Criteria) this;
        }

        public Criteria andGsfrxxdzLessThan(String value) {
            addCriterion("gsfrxxdz <", value, "gsfrxxdz");
            return (Criteria) this;
        }

        public Criteria andGsfrxxdzLessThanOrEqualTo(String value) {
            addCriterion("gsfrxxdz <=", value, "gsfrxxdz");
            return (Criteria) this;
        }

        public Criteria andGsfrxxdzLike(String value) {
            addCriterion("gsfrxxdz like", value, "gsfrxxdz");
            return (Criteria) this;
        }

        public Criteria andGsfrxxdzNotLike(String value) {
            addCriterion("gsfrxxdz not like", value, "gsfrxxdz");
            return (Criteria) this;
        }

        public Criteria andGsfrxxdzIn(List<String> values) {
            addCriterion("gsfrxxdz in", values, "gsfrxxdz");
            return (Criteria) this;
        }

        public Criteria andGsfrxxdzNotIn(List<String> values) {
            addCriterion("gsfrxxdz not in", values, "gsfrxxdz");
            return (Criteria) this;
        }

        public Criteria andGsfrxxdzBetween(String value1, String value2) {
            addCriterion("gsfrxxdz between", value1, value2, "gsfrxxdz");
            return (Criteria) this;
        }

        public Criteria andGsfrxxdzNotBetween(String value1, String value2) {
            addCriterion("gsfrxxdz not between", value1, value2, "gsfrxxdz");
            return (Criteria) this;
        }

        public Criteria andFromTypeIsNull() {
            addCriterion("from_type is null");
            return (Criteria) this;
        }

        public Criteria andFromTypeIsNotNull() {
            addCriterion("from_type is not null");
            return (Criteria) this;
        }

        public Criteria andFromTypeEqualTo(String value) {
            addCriterion("from_type =", value, "fromType");
            return (Criteria) this;
        }

        public Criteria andFromTypeNotEqualTo(String value) {
            addCriterion("from_type <>", value, "fromType");
            return (Criteria) this;
        }

        public Criteria andFromTypeGreaterThan(String value) {
            addCriterion("from_type >", value, "fromType");
            return (Criteria) this;
        }

        public Criteria andFromTypeGreaterThanOrEqualTo(String value) {
            addCriterion("from_type >=", value, "fromType");
            return (Criteria) this;
        }

        public Criteria andFromTypeLessThan(String value) {
            addCriterion("from_type <", value, "fromType");
            return (Criteria) this;
        }

        public Criteria andFromTypeLessThanOrEqualTo(String value) {
            addCriterion("from_type <=", value, "fromType");
            return (Criteria) this;
        }

        public Criteria andFromTypeLike(String value) {
            addCriterion("from_type like", value, "fromType");
            return (Criteria) this;
        }

        public Criteria andFromTypeNotLike(String value) {
            addCriterion("from_type not like", value, "fromType");
            return (Criteria) this;
        }

        public Criteria andFromTypeIn(List<String> values) {
            addCriterion("from_type in", values, "fromType");
            return (Criteria) this;
        }

        public Criteria andFromTypeNotIn(List<String> values) {
            addCriterion("from_type not in", values, "fromType");
            return (Criteria) this;
        }

        public Criteria andFromTypeBetween(String value1, String value2) {
            addCriterion("from_type between", value1, value2, "fromType");
            return (Criteria) this;
        }

        public Criteria andFromTypeNotBetween(String value1, String value2) {
            addCriterion("from_type not between", value1, value2, "fromType");
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

        public Criteria andFzrMobileIsNull() {
            addCriterion("fzr_mobile is null");
            return (Criteria) this;
        }

        public Criteria andFzrMobileIsNotNull() {
            addCriterion("fzr_mobile is not null");
            return (Criteria) this;
        }

        public Criteria andFzrMobileEqualTo(String value) {
            addCriterion("fzr_mobile =", value, "fzrMobile");
            return (Criteria) this;
        }

        public Criteria andFzrMobileNotEqualTo(String value) {
            addCriterion("fzr_mobile <>", value, "fzrMobile");
            return (Criteria) this;
        }

        public Criteria andFzrMobileGreaterThan(String value) {
            addCriterion("fzr_mobile >", value, "fzrMobile");
            return (Criteria) this;
        }

        public Criteria andFzrMobileGreaterThanOrEqualTo(String value) {
            addCriterion("fzr_mobile >=", value, "fzrMobile");
            return (Criteria) this;
        }

        public Criteria andFzrMobileLessThan(String value) {
            addCriterion("fzr_mobile <", value, "fzrMobile");
            return (Criteria) this;
        }

        public Criteria andFzrMobileLessThanOrEqualTo(String value) {
            addCriterion("fzr_mobile <=", value, "fzrMobile");
            return (Criteria) this;
        }

        public Criteria andFzrMobileLike(String value) {
            addCriterion("fzr_mobile like", value, "fzrMobile");
            return (Criteria) this;
        }

        public Criteria andFzrMobileNotLike(String value) {
            addCriterion("fzr_mobile not like", value, "fzrMobile");
            return (Criteria) this;
        }

        public Criteria andFzrMobileIn(List<String> values) {
            addCriterion("fzr_mobile in", values, "fzrMobile");
            return (Criteria) this;
        }

        public Criteria andFzrMobileNotIn(List<String> values) {
            addCriterion("fzr_mobile not in", values, "fzrMobile");
            return (Criteria) this;
        }

        public Criteria andFzrMobileBetween(String value1, String value2) {
            addCriterion("fzr_mobile between", value1, value2, "fzrMobile");
            return (Criteria) this;
        }

        public Criteria andFzrMobileNotBetween(String value1, String value2) {
            addCriterion("fzr_mobile not between", value1, value2, "fzrMobile");
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

        public Criteria andTbrNameIsNull() {
            addCriterion("tbr_name is null");
            return (Criteria) this;
        }

        public Criteria andTbrNameIsNotNull() {
            addCriterion("tbr_name is not null");
            return (Criteria) this;
        }

        public Criteria andTbrNameEqualTo(String value) {
            addCriterion("tbr_name =", value, "tbrName");
            return (Criteria) this;
        }

        public Criteria andTbrNameNotEqualTo(String value) {
            addCriterion("tbr_name <>", value, "tbrName");
            return (Criteria) this;
        }

        public Criteria andTbrNameGreaterThan(String value) {
            addCriterion("tbr_name >", value, "tbrName");
            return (Criteria) this;
        }

        public Criteria andTbrNameGreaterThanOrEqualTo(String value) {
            addCriterion("tbr_name >=", value, "tbrName");
            return (Criteria) this;
        }

        public Criteria andTbrNameLessThan(String value) {
            addCriterion("tbr_name <", value, "tbrName");
            return (Criteria) this;
        }

        public Criteria andTbrNameLessThanOrEqualTo(String value) {
            addCriterion("tbr_name <=", value, "tbrName");
            return (Criteria) this;
        }

        public Criteria andTbrNameLike(String value) {
            addCriterion("tbr_name like", value, "tbrName");
            return (Criteria) this;
        }

        public Criteria andTbrNameNotLike(String value) {
            addCriterion("tbr_name not like", value, "tbrName");
            return (Criteria) this;
        }

        public Criteria andTbrNameIn(List<String> values) {
            addCriterion("tbr_name in", values, "tbrName");
            return (Criteria) this;
        }

        public Criteria andTbrNameNotIn(List<String> values) {
            addCriterion("tbr_name not in", values, "tbrName");
            return (Criteria) this;
        }

        public Criteria andTbrNameBetween(String value1, String value2) {
            addCriterion("tbr_name between", value1, value2, "tbrName");
            return (Criteria) this;
        }

        public Criteria andTbrNameNotBetween(String value1, String value2) {
            addCriterion("tbr_name not between", value1, value2, "tbrName");
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