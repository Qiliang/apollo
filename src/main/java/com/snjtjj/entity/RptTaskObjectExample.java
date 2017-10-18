package com.snjtjj.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class RptTaskObjectExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public RptTaskObjectExample() {
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

        public Criteria andTaskIdIsNull() {
            addCriterion("task_id is null");
            return (Criteria) this;
        }

        public Criteria andTaskIdIsNotNull() {
            addCriterion("task_id is not null");
            return (Criteria) this;
        }

        public Criteria andTaskIdEqualTo(String value) {
            addCriterion("task_id =", value, "taskId");
            return (Criteria) this;
        }

        public Criteria andTaskIdNotEqualTo(String value) {
            addCriterion("task_id <>", value, "taskId");
            return (Criteria) this;
        }

        public Criteria andTaskIdGreaterThan(String value) {
            addCriterion("task_id >", value, "taskId");
            return (Criteria) this;
        }

        public Criteria andTaskIdGreaterThanOrEqualTo(String value) {
            addCriterion("task_id >=", value, "taskId");
            return (Criteria) this;
        }

        public Criteria andTaskIdLessThan(String value) {
            addCriterion("task_id <", value, "taskId");
            return (Criteria) this;
        }

        public Criteria andTaskIdLessThanOrEqualTo(String value) {
            addCriterion("task_id <=", value, "taskId");
            return (Criteria) this;
        }

        public Criteria andTaskIdLike(String value) {
            addCriterion("task_id like", value, "taskId");
            return (Criteria) this;
        }

        public Criteria andTaskIdNotLike(String value) {
            addCriterion("task_id not like", value, "taskId");
            return (Criteria) this;
        }

        public Criteria andTaskIdIn(List<String> values) {
            addCriterion("task_id in", values, "taskId");
            return (Criteria) this;
        }

        public Criteria andTaskIdNotIn(List<String> values) {
            addCriterion("task_id not in", values, "taskId");
            return (Criteria) this;
        }

        public Criteria andTaskIdBetween(String value1, String value2) {
            addCriterion("task_id between", value1, value2, "taskId");
            return (Criteria) this;
        }

        public Criteria andTaskIdNotBetween(String value1, String value2) {
            addCriterion("task_id not between", value1, value2, "taskId");
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

        public Criteria andTypeIsNull() {
            addCriterion("type is null");
            return (Criteria) this;
        }

        public Criteria andTypeIsNotNull() {
            addCriterion("type is not null");
            return (Criteria) this;
        }

        public Criteria andTypeEqualTo(String value) {
            addCriterion("type =", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeNotEqualTo(String value) {
            addCriterion("type <>", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeGreaterThan(String value) {
            addCriterion("type >", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeGreaterThanOrEqualTo(String value) {
            addCriterion("type >=", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeLessThan(String value) {
            addCriterion("type <", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeLessThanOrEqualTo(String value) {
            addCriterion("type <=", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeLike(String value) {
            addCriterion("type like", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeNotLike(String value) {
            addCriterion("type not like", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeIn(List<String> values) {
            addCriterion("type in", values, "type");
            return (Criteria) this;
        }

        public Criteria andTypeNotIn(List<String> values) {
            addCriterion("type not in", values, "type");
            return (Criteria) this;
        }

        public Criteria andTypeBetween(String value1, String value2) {
            addCriterion("type between", value1, value2, "type");
            return (Criteria) this;
        }

        public Criteria andTypeNotBetween(String value1, String value2) {
            addCriterion("type not between", value1, value2, "type");
            return (Criteria) this;
        }

        public Criteria andXzqhIdIsNull() {
            addCriterion("xzqh_id is null");
            return (Criteria) this;
        }

        public Criteria andXzqhIdIsNotNull() {
            addCriterion("xzqh_id is not null");
            return (Criteria) this;
        }

        public Criteria andXzqhIdEqualTo(String value) {
            addCriterion("xzqh_id =", value, "xzqhId");
            return (Criteria) this;
        }

        public Criteria andXzqhIdNotEqualTo(String value) {
            addCriterion("xzqh_id <>", value, "xzqhId");
            return (Criteria) this;
        }

        public Criteria andXzqhIdGreaterThan(String value) {
            addCriterion("xzqh_id >", value, "xzqhId");
            return (Criteria) this;
        }

        public Criteria andXzqhIdGreaterThanOrEqualTo(String value) {
            addCriterion("xzqh_id >=", value, "xzqhId");
            return (Criteria) this;
        }

        public Criteria andXzqhIdLessThan(String value) {
            addCriterion("xzqh_id <", value, "xzqhId");
            return (Criteria) this;
        }

        public Criteria andXzqhIdLessThanOrEqualTo(String value) {
            addCriterion("xzqh_id <=", value, "xzqhId");
            return (Criteria) this;
        }

        public Criteria andXzqhIdLike(String value) {
            addCriterion("xzqh_id like", value, "xzqhId");
            return (Criteria) this;
        }

        public Criteria andXzqhIdNotLike(String value) {
            addCriterion("xzqh_id not like", value, "xzqhId");
            return (Criteria) this;
        }

        public Criteria andXzqhIdIn(List<String> values) {
            addCriterion("xzqh_id in", values, "xzqhId");
            return (Criteria) this;
        }

        public Criteria andXzqhIdNotIn(List<String> values) {
            addCriterion("xzqh_id not in", values, "xzqhId");
            return (Criteria) this;
        }

        public Criteria andXzqhIdBetween(String value1, String value2) {
            addCriterion("xzqh_id between", value1, value2, "xzqhId");
            return (Criteria) this;
        }

        public Criteria andXzqhIdNotBetween(String value1, String value2) {
            addCriterion("xzqh_id not between", value1, value2, "xzqhId");
            return (Criteria) this;
        }

        public Criteria andReportStateIsNull() {
            addCriterion("report_state is null");
            return (Criteria) this;
        }

        public Criteria andReportStateIsNotNull() {
            addCriterion("report_state is not null");
            return (Criteria) this;
        }

        public Criteria andReportStateEqualTo(String value) {
            addCriterion("report_state =", value, "reportState");
            return (Criteria) this;
        }

        public Criteria andReportStateNotEqualTo(String value) {
            addCriterion("report_state <>", value, "reportState");
            return (Criteria) this;
        }

        public Criteria andReportStateGreaterThan(String value) {
            addCriterion("report_state >", value, "reportState");
            return (Criteria) this;
        }

        public Criteria andReportStateGreaterThanOrEqualTo(String value) {
            addCriterion("report_state >=", value, "reportState");
            return (Criteria) this;
        }

        public Criteria andReportStateLessThan(String value) {
            addCriterion("report_state <", value, "reportState");
            return (Criteria) this;
        }

        public Criteria andReportStateLessThanOrEqualTo(String value) {
            addCriterion("report_state <=", value, "reportState");
            return (Criteria) this;
        }

        public Criteria andReportStateLike(String value) {
            addCriterion("report_state like", value, "reportState");
            return (Criteria) this;
        }

        public Criteria andReportStateNotLike(String value) {
            addCriterion("report_state not like", value, "reportState");
            return (Criteria) this;
        }

        public Criteria andReportStateIn(List<String> values) {
            addCriterion("report_state in", values, "reportState");
            return (Criteria) this;
        }

        public Criteria andReportStateNotIn(List<String> values) {
            addCriterion("report_state not in", values, "reportState");
            return (Criteria) this;
        }

        public Criteria andReportStateBetween(String value1, String value2) {
            addCriterion("report_state between", value1, value2, "reportState");
            return (Criteria) this;
        }

        public Criteria andReportStateNotBetween(String value1, String value2) {
            addCriterion("report_state not between", value1, value2, "reportState");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsIsNull() {
            addCriterion("town_suggestions is null");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsIsNotNull() {
            addCriterion("town_suggestions is not null");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsEqualTo(String value) {
            addCriterion("town_suggestions =", value, "townSuggestions");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsNotEqualTo(String value) {
            addCriterion("town_suggestions <>", value, "townSuggestions");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsGreaterThan(String value) {
            addCriterion("town_suggestions >", value, "townSuggestions");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsGreaterThanOrEqualTo(String value) {
            addCriterion("town_suggestions >=", value, "townSuggestions");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsLessThan(String value) {
            addCriterion("town_suggestions <", value, "townSuggestions");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsLessThanOrEqualTo(String value) {
            addCriterion("town_suggestions <=", value, "townSuggestions");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsLike(String value) {
            addCriterion("town_suggestions like", value, "townSuggestions");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsNotLike(String value) {
            addCriterion("town_suggestions not like", value, "townSuggestions");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsIn(List<String> values) {
            addCriterion("town_suggestions in", values, "townSuggestions");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsNotIn(List<String> values) {
            addCriterion("town_suggestions not in", values, "townSuggestions");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsBetween(String value1, String value2) {
            addCriterion("town_suggestions between", value1, value2, "townSuggestions");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsNotBetween(String value1, String value2) {
            addCriterion("town_suggestions not between", value1, value2, "townSuggestions");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsIsNull() {
            addCriterion("area_suggestions is null");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsIsNotNull() {
            addCriterion("area_suggestions is not null");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsEqualTo(String value) {
            addCriterion("area_suggestions =", value, "areaSuggestions");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsNotEqualTo(String value) {
            addCriterion("area_suggestions <>", value, "areaSuggestions");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsGreaterThan(String value) {
            addCriterion("area_suggestions >", value, "areaSuggestions");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsGreaterThanOrEqualTo(String value) {
            addCriterion("area_suggestions >=", value, "areaSuggestions");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsLessThan(String value) {
            addCriterion("area_suggestions <", value, "areaSuggestions");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsLessThanOrEqualTo(String value) {
            addCriterion("area_suggestions <=", value, "areaSuggestions");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsLike(String value) {
            addCriterion("area_suggestions like", value, "areaSuggestions");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsNotLike(String value) {
            addCriterion("area_suggestions not like", value, "areaSuggestions");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsIn(List<String> values) {
            addCriterion("area_suggestions in", values, "areaSuggestions");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsNotIn(List<String> values) {
            addCriterion("area_suggestions not in", values, "areaSuggestions");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsBetween(String value1, String value2) {
            addCriterion("area_suggestions between", value1, value2, "areaSuggestions");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsNotBetween(String value1, String value2) {
            addCriterion("area_suggestions not between", value1, value2, "areaSuggestions");
            return (Criteria) this;
        }

        public Criteria andFillDateIsNull() {
            addCriterion("fill_date is null");
            return (Criteria) this;
        }

        public Criteria andFillDateIsNotNull() {
            addCriterion("fill_date is not null");
            return (Criteria) this;
        }

        public Criteria andFillDateEqualTo(Date value) {
            addCriterion("fill_date =", value, "fillDate");
            return (Criteria) this;
        }

        public Criteria andFillDateNotEqualTo(Date value) {
            addCriterion("fill_date <>", value, "fillDate");
            return (Criteria) this;
        }

        public Criteria andFillDateGreaterThan(Date value) {
            addCriterion("fill_date >", value, "fillDate");
            return (Criteria) this;
        }

        public Criteria andFillDateGreaterThanOrEqualTo(Date value) {
            addCriterion("fill_date >=", value, "fillDate");
            return (Criteria) this;
        }

        public Criteria andFillDateLessThan(Date value) {
            addCriterion("fill_date <", value, "fillDate");
            return (Criteria) this;
        }

        public Criteria andFillDateLessThanOrEqualTo(Date value) {
            addCriterion("fill_date <=", value, "fillDate");
            return (Criteria) this;
        }

        public Criteria andFillDateIn(List<Date> values) {
            addCriterion("fill_date in", values, "fillDate");
            return (Criteria) this;
        }

        public Criteria andFillDateNotIn(List<Date> values) {
            addCriterion("fill_date not in", values, "fillDate");
            return (Criteria) this;
        }

        public Criteria andFillDateBetween(Date value1, Date value2) {
            addCriterion("fill_date between", value1, value2, "fillDate");
            return (Criteria) this;
        }

        public Criteria andFillDateNotBetween(Date value1, Date value2) {
            addCriterion("fill_date not between", value1, value2, "fillDate");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsDateIsNull() {
            addCriterion("town_suggestions_date is null");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsDateIsNotNull() {
            addCriterion("town_suggestions_date is not null");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsDateEqualTo(Date value) {
            addCriterion("town_suggestions_date =", value, "townSuggestionsDate");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsDateNotEqualTo(Date value) {
            addCriterion("town_suggestions_date <>", value, "townSuggestionsDate");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsDateGreaterThan(Date value) {
            addCriterion("town_suggestions_date >", value, "townSuggestionsDate");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsDateGreaterThanOrEqualTo(Date value) {
            addCriterion("town_suggestions_date >=", value, "townSuggestionsDate");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsDateLessThan(Date value) {
            addCriterion("town_suggestions_date <", value, "townSuggestionsDate");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsDateLessThanOrEqualTo(Date value) {
            addCriterion("town_suggestions_date <=", value, "townSuggestionsDate");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsDateIn(List<Date> values) {
            addCriterion("town_suggestions_date in", values, "townSuggestionsDate");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsDateNotIn(List<Date> values) {
            addCriterion("town_suggestions_date not in", values, "townSuggestionsDate");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsDateBetween(Date value1, Date value2) {
            addCriterion("town_suggestions_date between", value1, value2, "townSuggestionsDate");
            return (Criteria) this;
        }

        public Criteria andTownSuggestionsDateNotBetween(Date value1, Date value2) {
            addCriterion("town_suggestions_date not between", value1, value2, "townSuggestionsDate");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsDateIsNull() {
            addCriterion("area_suggestions_date is null");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsDateIsNotNull() {
            addCriterion("area_suggestions_date is not null");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsDateEqualTo(Date value) {
            addCriterion("area_suggestions_date =", value, "areaSuggestionsDate");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsDateNotEqualTo(Date value) {
            addCriterion("area_suggestions_date <>", value, "areaSuggestionsDate");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsDateGreaterThan(Date value) {
            addCriterion("area_suggestions_date >", value, "areaSuggestionsDate");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsDateGreaterThanOrEqualTo(Date value) {
            addCriterion("area_suggestions_date >=", value, "areaSuggestionsDate");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsDateLessThan(Date value) {
            addCriterion("area_suggestions_date <", value, "areaSuggestionsDate");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsDateLessThanOrEqualTo(Date value) {
            addCriterion("area_suggestions_date <=", value, "areaSuggestionsDate");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsDateIn(List<Date> values) {
            addCriterion("area_suggestions_date in", values, "areaSuggestionsDate");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsDateNotIn(List<Date> values) {
            addCriterion("area_suggestions_date not in", values, "areaSuggestionsDate");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsDateBetween(Date value1, Date value2) {
            addCriterion("area_suggestions_date between", value1, value2, "areaSuggestionsDate");
            return (Criteria) this;
        }

        public Criteria andAreaSuggestionsDateNotBetween(Date value1, Date value2) {
            addCriterion("area_suggestions_date not between", value1, value2, "areaSuggestionsDate");
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