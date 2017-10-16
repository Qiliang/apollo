package com.snjtjj.entity;

import java.util.ArrayList;
import java.util.List;

public class RptTabCollectExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public RptTabCollectExample() {
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

        public Criteria andHzcodeIsNull() {
            addCriterion("hzcode is null");
            return (Criteria) this;
        }

        public Criteria andHzcodeIsNotNull() {
            addCriterion("hzcode is not null");
            return (Criteria) this;
        }

        public Criteria andHzcodeEqualTo(String value) {
            addCriterion("hzcode =", value, "hzcode");
            return (Criteria) this;
        }

        public Criteria andHzcodeNotEqualTo(String value) {
            addCriterion("hzcode <>", value, "hzcode");
            return (Criteria) this;
        }

        public Criteria andHzcodeGreaterThan(String value) {
            addCriterion("hzcode >", value, "hzcode");
            return (Criteria) this;
        }

        public Criteria andHzcodeGreaterThanOrEqualTo(String value) {
            addCriterion("hzcode >=", value, "hzcode");
            return (Criteria) this;
        }

        public Criteria andHzcodeLessThan(String value) {
            addCriterion("hzcode <", value, "hzcode");
            return (Criteria) this;
        }

        public Criteria andHzcodeLessThanOrEqualTo(String value) {
            addCriterion("hzcode <=", value, "hzcode");
            return (Criteria) this;
        }

        public Criteria andHzcodeLike(String value) {
            addCriterion("hzcode like", value, "hzcode");
            return (Criteria) this;
        }

        public Criteria andHzcodeNotLike(String value) {
            addCriterion("hzcode not like", value, "hzcode");
            return (Criteria) this;
        }

        public Criteria andHzcodeIn(List<String> values) {
            addCriterion("hzcode in", values, "hzcode");
            return (Criteria) this;
        }

        public Criteria andHzcodeNotIn(List<String> values) {
            addCriterion("hzcode not in", values, "hzcode");
            return (Criteria) this;
        }

        public Criteria andHzcodeBetween(String value1, String value2) {
            addCriterion("hzcode between", value1, value2, "hzcode");
            return (Criteria) this;
        }

        public Criteria andHzcodeNotBetween(String value1, String value2) {
            addCriterion("hzcode not between", value1, value2, "hzcode");
            return (Criteria) this;
        }

        public Criteria andUsercodeIsNull() {
            addCriterion("usercode is null");
            return (Criteria) this;
        }

        public Criteria andUsercodeIsNotNull() {
            addCriterion("usercode is not null");
            return (Criteria) this;
        }

        public Criteria andUsercodeEqualTo(String value) {
            addCriterion("usercode =", value, "usercode");
            return (Criteria) this;
        }

        public Criteria andUsercodeNotEqualTo(String value) {
            addCriterion("usercode <>", value, "usercode");
            return (Criteria) this;
        }

        public Criteria andUsercodeGreaterThan(String value) {
            addCriterion("usercode >", value, "usercode");
            return (Criteria) this;
        }

        public Criteria andUsercodeGreaterThanOrEqualTo(String value) {
            addCriterion("usercode >=", value, "usercode");
            return (Criteria) this;
        }

        public Criteria andUsercodeLessThan(String value) {
            addCriterion("usercode <", value, "usercode");
            return (Criteria) this;
        }

        public Criteria andUsercodeLessThanOrEqualTo(String value) {
            addCriterion("usercode <=", value, "usercode");
            return (Criteria) this;
        }

        public Criteria andUsercodeLike(String value) {
            addCriterion("usercode like", value, "usercode");
            return (Criteria) this;
        }

        public Criteria andUsercodeNotLike(String value) {
            addCriterion("usercode not like", value, "usercode");
            return (Criteria) this;
        }

        public Criteria andUsercodeIn(List<String> values) {
            addCriterion("usercode in", values, "usercode");
            return (Criteria) this;
        }

        public Criteria andUsercodeNotIn(List<String> values) {
            addCriterion("usercode not in", values, "usercode");
            return (Criteria) this;
        }

        public Criteria andUsercodeBetween(String value1, String value2) {
            addCriterion("usercode between", value1, value2, "usercode");
            return (Criteria) this;
        }

        public Criteria andUsercodeNotBetween(String value1, String value2) {
            addCriterion("usercode not between", value1, value2, "usercode");
            return (Criteria) this;
        }

        public Criteria andNum1IsNull() {
            addCriterion("num1 is null");
            return (Criteria) this;
        }

        public Criteria andNum1IsNotNull() {
            addCriterion("num1 is not null");
            return (Criteria) this;
        }

        public Criteria andNum1EqualTo(Integer value) {
            addCriterion("num1 =", value, "num1");
            return (Criteria) this;
        }

        public Criteria andNum1NotEqualTo(Integer value) {
            addCriterion("num1 <>", value, "num1");
            return (Criteria) this;
        }

        public Criteria andNum1GreaterThan(Integer value) {
            addCriterion("num1 >", value, "num1");
            return (Criteria) this;
        }

        public Criteria andNum1GreaterThanOrEqualTo(Integer value) {
            addCriterion("num1 >=", value, "num1");
            return (Criteria) this;
        }

        public Criteria andNum1LessThan(Integer value) {
            addCriterion("num1 <", value, "num1");
            return (Criteria) this;
        }

        public Criteria andNum1LessThanOrEqualTo(Integer value) {
            addCriterion("num1 <=", value, "num1");
            return (Criteria) this;
        }

        public Criteria andNum1In(List<Integer> values) {
            addCriterion("num1 in", values, "num1");
            return (Criteria) this;
        }

        public Criteria andNum1NotIn(List<Integer> values) {
            addCriterion("num1 not in", values, "num1");
            return (Criteria) this;
        }

        public Criteria andNum1Between(Integer value1, Integer value2) {
            addCriterion("num1 between", value1, value2, "num1");
            return (Criteria) this;
        }

        public Criteria andNum1NotBetween(Integer value1, Integer value2) {
            addCriterion("num1 not between", value1, value2, "num1");
            return (Criteria) this;
        }

        public Criteria andNum2IsNull() {
            addCriterion("num2 is null");
            return (Criteria) this;
        }

        public Criteria andNum2IsNotNull() {
            addCriterion("num2 is not null");
            return (Criteria) this;
        }

        public Criteria andNum2EqualTo(Integer value) {
            addCriterion("num2 =", value, "num2");
            return (Criteria) this;
        }

        public Criteria andNum2NotEqualTo(Integer value) {
            addCriterion("num2 <>", value, "num2");
            return (Criteria) this;
        }

        public Criteria andNum2GreaterThan(Integer value) {
            addCriterion("num2 >", value, "num2");
            return (Criteria) this;
        }

        public Criteria andNum2GreaterThanOrEqualTo(Integer value) {
            addCriterion("num2 >=", value, "num2");
            return (Criteria) this;
        }

        public Criteria andNum2LessThan(Integer value) {
            addCriterion("num2 <", value, "num2");
            return (Criteria) this;
        }

        public Criteria andNum2LessThanOrEqualTo(Integer value) {
            addCriterion("num2 <=", value, "num2");
            return (Criteria) this;
        }

        public Criteria andNum2In(List<Integer> values) {
            addCriterion("num2 in", values, "num2");
            return (Criteria) this;
        }

        public Criteria andNum2NotIn(List<Integer> values) {
            addCriterion("num2 not in", values, "num2");
            return (Criteria) this;
        }

        public Criteria andNum2Between(Integer value1, Integer value2) {
            addCriterion("num2 between", value1, value2, "num2");
            return (Criteria) this;
        }

        public Criteria andNum2NotBetween(Integer value1, Integer value2) {
            addCriterion("num2 not between", value1, value2, "num2");
            return (Criteria) this;
        }

        public Criteria andNum3IsNull() {
            addCriterion("num3 is null");
            return (Criteria) this;
        }

        public Criteria andNum3IsNotNull() {
            addCriterion("num3 is not null");
            return (Criteria) this;
        }

        public Criteria andNum3EqualTo(Integer value) {
            addCriterion("num3 =", value, "num3");
            return (Criteria) this;
        }

        public Criteria andNum3NotEqualTo(Integer value) {
            addCriterion("num3 <>", value, "num3");
            return (Criteria) this;
        }

        public Criteria andNum3GreaterThan(Integer value) {
            addCriterion("num3 >", value, "num3");
            return (Criteria) this;
        }

        public Criteria andNum3GreaterThanOrEqualTo(Integer value) {
            addCriterion("num3 >=", value, "num3");
            return (Criteria) this;
        }

        public Criteria andNum3LessThan(Integer value) {
            addCriterion("num3 <", value, "num3");
            return (Criteria) this;
        }

        public Criteria andNum3LessThanOrEqualTo(Integer value) {
            addCriterion("num3 <=", value, "num3");
            return (Criteria) this;
        }

        public Criteria andNum3In(List<Integer> values) {
            addCriterion("num3 in", values, "num3");
            return (Criteria) this;
        }

        public Criteria andNum3NotIn(List<Integer> values) {
            addCriterion("num3 not in", values, "num3");
            return (Criteria) this;
        }

        public Criteria andNum3Between(Integer value1, Integer value2) {
            addCriterion("num3 between", value1, value2, "num3");
            return (Criteria) this;
        }

        public Criteria andNum3NotBetween(Integer value1, Integer value2) {
            addCriterion("num3 not between", value1, value2, "num3");
            return (Criteria) this;
        }

        public Criteria andNum4IsNull() {
            addCriterion("num4 is null");
            return (Criteria) this;
        }

        public Criteria andNum4IsNotNull() {
            addCriterion("num4 is not null");
            return (Criteria) this;
        }

        public Criteria andNum4EqualTo(Integer value) {
            addCriterion("num4 =", value, "num4");
            return (Criteria) this;
        }

        public Criteria andNum4NotEqualTo(Integer value) {
            addCriterion("num4 <>", value, "num4");
            return (Criteria) this;
        }

        public Criteria andNum4GreaterThan(Integer value) {
            addCriterion("num4 >", value, "num4");
            return (Criteria) this;
        }

        public Criteria andNum4GreaterThanOrEqualTo(Integer value) {
            addCriterion("num4 >=", value, "num4");
            return (Criteria) this;
        }

        public Criteria andNum4LessThan(Integer value) {
            addCriterion("num4 <", value, "num4");
            return (Criteria) this;
        }

        public Criteria andNum4LessThanOrEqualTo(Integer value) {
            addCriterion("num4 <=", value, "num4");
            return (Criteria) this;
        }

        public Criteria andNum4In(List<Integer> values) {
            addCriterion("num4 in", values, "num4");
            return (Criteria) this;
        }

        public Criteria andNum4NotIn(List<Integer> values) {
            addCriterion("num4 not in", values, "num4");
            return (Criteria) this;
        }

        public Criteria andNum4Between(Integer value1, Integer value2) {
            addCriterion("num4 between", value1, value2, "num4");
            return (Criteria) this;
        }

        public Criteria andNum4NotBetween(Integer value1, Integer value2) {
            addCriterion("num4 not between", value1, value2, "num4");
            return (Criteria) this;
        }

        public Criteria andNum5IsNull() {
            addCriterion("num5 is null");
            return (Criteria) this;
        }

        public Criteria andNum5IsNotNull() {
            addCriterion("num5 is not null");
            return (Criteria) this;
        }

        public Criteria andNum5EqualTo(Integer value) {
            addCriterion("num5 =", value, "num5");
            return (Criteria) this;
        }

        public Criteria andNum5NotEqualTo(Integer value) {
            addCriterion("num5 <>", value, "num5");
            return (Criteria) this;
        }

        public Criteria andNum5GreaterThan(Integer value) {
            addCriterion("num5 >", value, "num5");
            return (Criteria) this;
        }

        public Criteria andNum5GreaterThanOrEqualTo(Integer value) {
            addCriterion("num5 >=", value, "num5");
            return (Criteria) this;
        }

        public Criteria andNum5LessThan(Integer value) {
            addCriterion("num5 <", value, "num5");
            return (Criteria) this;
        }

        public Criteria andNum5LessThanOrEqualTo(Integer value) {
            addCriterion("num5 <=", value, "num5");
            return (Criteria) this;
        }

        public Criteria andNum5In(List<Integer> values) {
            addCriterion("num5 in", values, "num5");
            return (Criteria) this;
        }

        public Criteria andNum5NotIn(List<Integer> values) {
            addCriterion("num5 not in", values, "num5");
            return (Criteria) this;
        }

        public Criteria andNum5Between(Integer value1, Integer value2) {
            addCriterion("num5 between", value1, value2, "num5");
            return (Criteria) this;
        }

        public Criteria andNum5NotBetween(Integer value1, Integer value2) {
            addCriterion("num5 not between", value1, value2, "num5");
            return (Criteria) this;
        }

        public Criteria andNum6IsNull() {
            addCriterion("num6 is null");
            return (Criteria) this;
        }

        public Criteria andNum6IsNotNull() {
            addCriterion("num6 is not null");
            return (Criteria) this;
        }

        public Criteria andNum6EqualTo(Integer value) {
            addCriterion("num6 =", value, "num6");
            return (Criteria) this;
        }

        public Criteria andNum6NotEqualTo(Integer value) {
            addCriterion("num6 <>", value, "num6");
            return (Criteria) this;
        }

        public Criteria andNum6GreaterThan(Integer value) {
            addCriterion("num6 >", value, "num6");
            return (Criteria) this;
        }

        public Criteria andNum6GreaterThanOrEqualTo(Integer value) {
            addCriterion("num6 >=", value, "num6");
            return (Criteria) this;
        }

        public Criteria andNum6LessThan(Integer value) {
            addCriterion("num6 <", value, "num6");
            return (Criteria) this;
        }

        public Criteria andNum6LessThanOrEqualTo(Integer value) {
            addCriterion("num6 <=", value, "num6");
            return (Criteria) this;
        }

        public Criteria andNum6In(List<Integer> values) {
            addCriterion("num6 in", values, "num6");
            return (Criteria) this;
        }

        public Criteria andNum6NotIn(List<Integer> values) {
            addCriterion("num6 not in", values, "num6");
            return (Criteria) this;
        }

        public Criteria andNum6Between(Integer value1, Integer value2) {
            addCriterion("num6 between", value1, value2, "num6");
            return (Criteria) this;
        }

        public Criteria andNum6NotBetween(Integer value1, Integer value2) {
            addCriterion("num6 not between", value1, value2, "num6");
            return (Criteria) this;
        }

        public Criteria andNum7IsNull() {
            addCriterion("num7 is null");
            return (Criteria) this;
        }

        public Criteria andNum7IsNotNull() {
            addCriterion("num7 is not null");
            return (Criteria) this;
        }

        public Criteria andNum7EqualTo(Integer value) {
            addCriterion("num7 =", value, "num7");
            return (Criteria) this;
        }

        public Criteria andNum7NotEqualTo(Integer value) {
            addCriterion("num7 <>", value, "num7");
            return (Criteria) this;
        }

        public Criteria andNum7GreaterThan(Integer value) {
            addCriterion("num7 >", value, "num7");
            return (Criteria) this;
        }

        public Criteria andNum7GreaterThanOrEqualTo(Integer value) {
            addCriterion("num7 >=", value, "num7");
            return (Criteria) this;
        }

        public Criteria andNum7LessThan(Integer value) {
            addCriterion("num7 <", value, "num7");
            return (Criteria) this;
        }

        public Criteria andNum7LessThanOrEqualTo(Integer value) {
            addCriterion("num7 <=", value, "num7");
            return (Criteria) this;
        }

        public Criteria andNum7In(List<Integer> values) {
            addCriterion("num7 in", values, "num7");
            return (Criteria) this;
        }

        public Criteria andNum7NotIn(List<Integer> values) {
            addCriterion("num7 not in", values, "num7");
            return (Criteria) this;
        }

        public Criteria andNum7Between(Integer value1, Integer value2) {
            addCriterion("num7 between", value1, value2, "num7");
            return (Criteria) this;
        }

        public Criteria andNum7NotBetween(Integer value1, Integer value2) {
            addCriterion("num7 not between", value1, value2, "num7");
            return (Criteria) this;
        }

        public Criteria andNum8IsNull() {
            addCriterion("num8 is null");
            return (Criteria) this;
        }

        public Criteria andNum8IsNotNull() {
            addCriterion("num8 is not null");
            return (Criteria) this;
        }

        public Criteria andNum8EqualTo(Integer value) {
            addCriterion("num8 =", value, "num8");
            return (Criteria) this;
        }

        public Criteria andNum8NotEqualTo(Integer value) {
            addCriterion("num8 <>", value, "num8");
            return (Criteria) this;
        }

        public Criteria andNum8GreaterThan(Integer value) {
            addCriterion("num8 >", value, "num8");
            return (Criteria) this;
        }

        public Criteria andNum8GreaterThanOrEqualTo(Integer value) {
            addCriterion("num8 >=", value, "num8");
            return (Criteria) this;
        }

        public Criteria andNum8LessThan(Integer value) {
            addCriterion("num8 <", value, "num8");
            return (Criteria) this;
        }

        public Criteria andNum8LessThanOrEqualTo(Integer value) {
            addCriterion("num8 <=", value, "num8");
            return (Criteria) this;
        }

        public Criteria andNum8In(List<Integer> values) {
            addCriterion("num8 in", values, "num8");
            return (Criteria) this;
        }

        public Criteria andNum8NotIn(List<Integer> values) {
            addCriterion("num8 not in", values, "num8");
            return (Criteria) this;
        }

        public Criteria andNum8Between(Integer value1, Integer value2) {
            addCriterion("num8 between", value1, value2, "num8");
            return (Criteria) this;
        }

        public Criteria andNum8NotBetween(Integer value1, Integer value2) {
            addCriterion("num8 not between", value1, value2, "num8");
            return (Criteria) this;
        }

        public Criteria andNum9IsNull() {
            addCriterion("num9 is null");
            return (Criteria) this;
        }

        public Criteria andNum9IsNotNull() {
            addCriterion("num9 is not null");
            return (Criteria) this;
        }

        public Criteria andNum9EqualTo(Integer value) {
            addCriterion("num9 =", value, "num9");
            return (Criteria) this;
        }

        public Criteria andNum9NotEqualTo(Integer value) {
            addCriterion("num9 <>", value, "num9");
            return (Criteria) this;
        }

        public Criteria andNum9GreaterThan(Integer value) {
            addCriterion("num9 >", value, "num9");
            return (Criteria) this;
        }

        public Criteria andNum9GreaterThanOrEqualTo(Integer value) {
            addCriterion("num9 >=", value, "num9");
            return (Criteria) this;
        }

        public Criteria andNum9LessThan(Integer value) {
            addCriterion("num9 <", value, "num9");
            return (Criteria) this;
        }

        public Criteria andNum9LessThanOrEqualTo(Integer value) {
            addCriterion("num9 <=", value, "num9");
            return (Criteria) this;
        }

        public Criteria andNum9In(List<Integer> values) {
            addCriterion("num9 in", values, "num9");
            return (Criteria) this;
        }

        public Criteria andNum9NotIn(List<Integer> values) {
            addCriterion("num9 not in", values, "num9");
            return (Criteria) this;
        }

        public Criteria andNum9Between(Integer value1, Integer value2) {
            addCriterion("num9 between", value1, value2, "num9");
            return (Criteria) this;
        }

        public Criteria andNum9NotBetween(Integer value1, Integer value2) {
            addCriterion("num9 not between", value1, value2, "num9");
            return (Criteria) this;
        }

        public Criteria andNum10IsNull() {
            addCriterion("num10 is null");
            return (Criteria) this;
        }

        public Criteria andNum10IsNotNull() {
            addCriterion("num10 is not null");
            return (Criteria) this;
        }

        public Criteria andNum10EqualTo(Integer value) {
            addCriterion("num10 =", value, "num10");
            return (Criteria) this;
        }

        public Criteria andNum10NotEqualTo(Integer value) {
            addCriterion("num10 <>", value, "num10");
            return (Criteria) this;
        }

        public Criteria andNum10GreaterThan(Integer value) {
            addCriterion("num10 >", value, "num10");
            return (Criteria) this;
        }

        public Criteria andNum10GreaterThanOrEqualTo(Integer value) {
            addCriterion("num10 >=", value, "num10");
            return (Criteria) this;
        }

        public Criteria andNum10LessThan(Integer value) {
            addCriterion("num10 <", value, "num10");
            return (Criteria) this;
        }

        public Criteria andNum10LessThanOrEqualTo(Integer value) {
            addCriterion("num10 <=", value, "num10");
            return (Criteria) this;
        }

        public Criteria andNum10In(List<Integer> values) {
            addCriterion("num10 in", values, "num10");
            return (Criteria) this;
        }

        public Criteria andNum10NotIn(List<Integer> values) {
            addCriterion("num10 not in", values, "num10");
            return (Criteria) this;
        }

        public Criteria andNum10Between(Integer value1, Integer value2) {
            addCriterion("num10 between", value1, value2, "num10");
            return (Criteria) this;
        }

        public Criteria andNum10NotBetween(Integer value1, Integer value2) {
            addCriterion("num10 not between", value1, value2, "num10");
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