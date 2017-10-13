package com.snjtjj.entity;

import java.util.ArrayList;
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

        public Criteria andZdbidIsNull() {
            addCriterion("zdbid is null");
            return (Criteria) this;
        }

        public Criteria andZdbidIsNotNull() {
            addCriterion("zdbid is not null");
            return (Criteria) this;
        }

        public Criteria andZdbidEqualTo(String value) {
            addCriterion("zdbid =", value, "zdbid");
            return (Criteria) this;
        }

        public Criteria andZdbidNotEqualTo(String value) {
            addCriterion("zdbid <>", value, "zdbid");
            return (Criteria) this;
        }

        public Criteria andZdbidGreaterThan(String value) {
            addCriterion("zdbid >", value, "zdbid");
            return (Criteria) this;
        }

        public Criteria andZdbidGreaterThanOrEqualTo(String value) {
            addCriterion("zdbid >=", value, "zdbid");
            return (Criteria) this;
        }

        public Criteria andZdbidLessThan(String value) {
            addCriterion("zdbid <", value, "zdbid");
            return (Criteria) this;
        }

        public Criteria andZdbidLessThanOrEqualTo(String value) {
            addCriterion("zdbid <=", value, "zdbid");
            return (Criteria) this;
        }

        public Criteria andZdbidLike(String value) {
            addCriterion("zdbid like", value, "zdbid");
            return (Criteria) this;
        }

        public Criteria andZdbidNotLike(String value) {
            addCriterion("zdbid not like", value, "zdbid");
            return (Criteria) this;
        }

        public Criteria andZdbidIn(List<String> values) {
            addCriterion("zdbid in", values, "zdbid");
            return (Criteria) this;
        }

        public Criteria andZdbidNotIn(List<String> values) {
            addCriterion("zdbid not in", values, "zdbid");
            return (Criteria) this;
        }

        public Criteria andZdbidBetween(String value1, String value2) {
            addCriterion("zdbid between", value1, value2, "zdbid");
            return (Criteria) this;
        }

        public Criteria andZdbidNotBetween(String value1, String value2) {
            addCriterion("zdbid not between", value1, value2, "zdbid");
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