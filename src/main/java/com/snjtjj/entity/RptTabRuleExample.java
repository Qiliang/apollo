package com.snjtjj.entity;

import java.util.ArrayList;
import java.util.List;

public class RptTabRuleExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public RptTabRuleExample() {
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

        public Criteria andTabidIsNull() {
            addCriterion("tabid is null");
            return (Criteria) this;
        }

        public Criteria andTabidIsNotNull() {
            addCriterion("tabid is not null");
            return (Criteria) this;
        }

        public Criteria andTabidEqualTo(String value) {
            addCriterion("tabid =", value, "tabid");
            return (Criteria) this;
        }

        public Criteria andTabidNotEqualTo(String value) {
            addCriterion("tabid <>", value, "tabid");
            return (Criteria) this;
        }

        public Criteria andTabidGreaterThan(String value) {
            addCriterion("tabid >", value, "tabid");
            return (Criteria) this;
        }

        public Criteria andTabidGreaterThanOrEqualTo(String value) {
            addCriterion("tabid >=", value, "tabid");
            return (Criteria) this;
        }

        public Criteria andTabidLessThan(String value) {
            addCriterion("tabid <", value, "tabid");
            return (Criteria) this;
        }

        public Criteria andTabidLessThanOrEqualTo(String value) {
            addCriterion("tabid <=", value, "tabid");
            return (Criteria) this;
        }

        public Criteria andTabidLike(String value) {
            addCriterion("tabid like", value, "tabid");
            return (Criteria) this;
        }

        public Criteria andTabidNotLike(String value) {
            addCriterion("tabid not like", value, "tabid");
            return (Criteria) this;
        }

        public Criteria andTabidIn(List<String> values) {
            addCriterion("tabid in", values, "tabid");
            return (Criteria) this;
        }

        public Criteria andTabidNotIn(List<String> values) {
            addCriterion("tabid not in", values, "tabid");
            return (Criteria) this;
        }

        public Criteria andTabidBetween(String value1, String value2) {
            addCriterion("tabid between", value1, value2, "tabid");
            return (Criteria) this;
        }

        public Criteria andTabidNotBetween(String value1, String value2) {
            addCriterion("tabid not between", value1, value2, "tabid");
            return (Criteria) this;
        }

        public Criteria andExpressIsNull() {
            addCriterion("express is null");
            return (Criteria) this;
        }

        public Criteria andExpressIsNotNull() {
            addCriterion("express is not null");
            return (Criteria) this;
        }

        public Criteria andExpressEqualTo(String value) {
            addCriterion("express =", value, "express");
            return (Criteria) this;
        }

        public Criteria andExpressNotEqualTo(String value) {
            addCriterion("express <>", value, "express");
            return (Criteria) this;
        }

        public Criteria andExpressGreaterThan(String value) {
            addCriterion("express >", value, "express");
            return (Criteria) this;
        }

        public Criteria andExpressGreaterThanOrEqualTo(String value) {
            addCriterion("express >=", value, "express");
            return (Criteria) this;
        }

        public Criteria andExpressLessThan(String value) {
            addCriterion("express <", value, "express");
            return (Criteria) this;
        }

        public Criteria andExpressLessThanOrEqualTo(String value) {
            addCriterion("express <=", value, "express");
            return (Criteria) this;
        }

        public Criteria andExpressLike(String value) {
            addCriterion("express like", value, "express");
            return (Criteria) this;
        }

        public Criteria andExpressNotLike(String value) {
            addCriterion("express not like", value, "express");
            return (Criteria) this;
        }

        public Criteria andExpressIn(List<String> values) {
            addCriterion("express in", values, "express");
            return (Criteria) this;
        }

        public Criteria andExpressNotIn(List<String> values) {
            addCriterion("express not in", values, "express");
            return (Criteria) this;
        }

        public Criteria andExpressBetween(String value1, String value2) {
            addCriterion("express between", value1, value2, "express");
            return (Criteria) this;
        }

        public Criteria andExpressNotBetween(String value1, String value2) {
            addCriterion("express not between", value1, value2, "express");
            return (Criteria) this;
        }

        public Criteria andParamsIsNull() {
            addCriterion("params is null");
            return (Criteria) this;
        }

        public Criteria andParamsIsNotNull() {
            addCriterion("params is not null");
            return (Criteria) this;
        }

        public Criteria andParamsEqualTo(String value) {
            addCriterion("params =", value, "params");
            return (Criteria) this;
        }

        public Criteria andParamsNotEqualTo(String value) {
            addCriterion("params <>", value, "params");
            return (Criteria) this;
        }

        public Criteria andParamsGreaterThan(String value) {
            addCriterion("params >", value, "params");
            return (Criteria) this;
        }

        public Criteria andParamsGreaterThanOrEqualTo(String value) {
            addCriterion("params >=", value, "params");
            return (Criteria) this;
        }

        public Criteria andParamsLessThan(String value) {
            addCriterion("params <", value, "params");
            return (Criteria) this;
        }

        public Criteria andParamsLessThanOrEqualTo(String value) {
            addCriterion("params <=", value, "params");
            return (Criteria) this;
        }

        public Criteria andParamsLike(String value) {
            addCriterion("params like", value, "params");
            return (Criteria) this;
        }

        public Criteria andParamsNotLike(String value) {
            addCriterion("params not like", value, "params");
            return (Criteria) this;
        }

        public Criteria andParamsIn(List<String> values) {
            addCriterion("params in", values, "params");
            return (Criteria) this;
        }

        public Criteria andParamsNotIn(List<String> values) {
            addCriterion("params not in", values, "params");
            return (Criteria) this;
        }

        public Criteria andParamsBetween(String value1, String value2) {
            addCriterion("params between", value1, value2, "params");
            return (Criteria) this;
        }

        public Criteria andParamsNotBetween(String value1, String value2) {
            addCriterion("params not between", value1, value2, "params");
            return (Criteria) this;
        }

        public Criteria andErrortextIsNull() {
            addCriterion("errortext is null");
            return (Criteria) this;
        }

        public Criteria andErrortextIsNotNull() {
            addCriterion("errortext is not null");
            return (Criteria) this;
        }

        public Criteria andErrortextEqualTo(String value) {
            addCriterion("errortext =", value, "errortext");
            return (Criteria) this;
        }

        public Criteria andErrortextNotEqualTo(String value) {
            addCriterion("errortext <>", value, "errortext");
            return (Criteria) this;
        }

        public Criteria andErrortextGreaterThan(String value) {
            addCriterion("errortext >", value, "errortext");
            return (Criteria) this;
        }

        public Criteria andErrortextGreaterThanOrEqualTo(String value) {
            addCriterion("errortext >=", value, "errortext");
            return (Criteria) this;
        }

        public Criteria andErrortextLessThan(String value) {
            addCriterion("errortext <", value, "errortext");
            return (Criteria) this;
        }

        public Criteria andErrortextLessThanOrEqualTo(String value) {
            addCriterion("errortext <=", value, "errortext");
            return (Criteria) this;
        }

        public Criteria andErrortextLike(String value) {
            addCriterion("errortext like", value, "errortext");
            return (Criteria) this;
        }

        public Criteria andErrortextNotLike(String value) {
            addCriterion("errortext not like", value, "errortext");
            return (Criteria) this;
        }

        public Criteria andErrortextIn(List<String> values) {
            addCriterion("errortext in", values, "errortext");
            return (Criteria) this;
        }

        public Criteria andErrortextNotIn(List<String> values) {
            addCriterion("errortext not in", values, "errortext");
            return (Criteria) this;
        }

        public Criteria andErrortextBetween(String value1, String value2) {
            addCriterion("errortext between", value1, value2, "errortext");
            return (Criteria) this;
        }

        public Criteria andErrortextNotBetween(String value1, String value2) {
            addCriterion("errortext not between", value1, value2, "errortext");
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