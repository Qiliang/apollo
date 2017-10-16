package com.snjtjj.entity;

import java.util.ArrayList;
import java.util.List;

public class RptTabSettingExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public RptTabSettingExample() {
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

        public Criteria andTypeidIsNull() {
            addCriterion("typeid is null");
            return (Criteria) this;
        }

        public Criteria andTypeidIsNotNull() {
            addCriterion("typeid is not null");
            return (Criteria) this;
        }

        public Criteria andTypeidEqualTo(Integer value) {
            addCriterion("typeid =", value, "typeid");
            return (Criteria) this;
        }

        public Criteria andTypeidNotEqualTo(Integer value) {
            addCriterion("typeid <>", value, "typeid");
            return (Criteria) this;
        }

        public Criteria andTypeidGreaterThan(Integer value) {
            addCriterion("typeid >", value, "typeid");
            return (Criteria) this;
        }

        public Criteria andTypeidGreaterThanOrEqualTo(Integer value) {
            addCriterion("typeid >=", value, "typeid");
            return (Criteria) this;
        }

        public Criteria andTypeidLessThan(Integer value) {
            addCriterion("typeid <", value, "typeid");
            return (Criteria) this;
        }

        public Criteria andTypeidLessThanOrEqualTo(Integer value) {
            addCriterion("typeid <=", value, "typeid");
            return (Criteria) this;
        }

        public Criteria andTypeidIn(List<Integer> values) {
            addCriterion("typeid in", values, "typeid");
            return (Criteria) this;
        }

        public Criteria andTypeidNotIn(List<Integer> values) {
            addCriterion("typeid not in", values, "typeid");
            return (Criteria) this;
        }

        public Criteria andTypeidBetween(Integer value1, Integer value2) {
            addCriterion("typeid between", value1, value2, "typeid");
            return (Criteria) this;
        }

        public Criteria andTypeidNotBetween(Integer value1, Integer value2) {
            addCriterion("typeid not between", value1, value2, "typeid");
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

        public Criteria andFixcolumnIsNull() {
            addCriterion("fixcolumn is null");
            return (Criteria) this;
        }

        public Criteria andFixcolumnIsNotNull() {
            addCriterion("fixcolumn is not null");
            return (Criteria) this;
        }

        public Criteria andFixcolumnEqualTo(Integer value) {
            addCriterion("fixcolumn =", value, "fixcolumn");
            return (Criteria) this;
        }

        public Criteria andFixcolumnNotEqualTo(Integer value) {
            addCriterion("fixcolumn <>", value, "fixcolumn");
            return (Criteria) this;
        }

        public Criteria andFixcolumnGreaterThan(Integer value) {
            addCriterion("fixcolumn >", value, "fixcolumn");
            return (Criteria) this;
        }

        public Criteria andFixcolumnGreaterThanOrEqualTo(Integer value) {
            addCriterion("fixcolumn >=", value, "fixcolumn");
            return (Criteria) this;
        }

        public Criteria andFixcolumnLessThan(Integer value) {
            addCriterion("fixcolumn <", value, "fixcolumn");
            return (Criteria) this;
        }

        public Criteria andFixcolumnLessThanOrEqualTo(Integer value) {
            addCriterion("fixcolumn <=", value, "fixcolumn");
            return (Criteria) this;
        }

        public Criteria andFixcolumnIn(List<Integer> values) {
            addCriterion("fixcolumn in", values, "fixcolumn");
            return (Criteria) this;
        }

        public Criteria andFixcolumnNotIn(List<Integer> values) {
            addCriterion("fixcolumn not in", values, "fixcolumn");
            return (Criteria) this;
        }

        public Criteria andFixcolumnBetween(Integer value1, Integer value2) {
            addCriterion("fixcolumn between", value1, value2, "fixcolumn");
            return (Criteria) this;
        }

        public Criteria andFixcolumnNotBetween(Integer value1, Integer value2) {
            addCriterion("fixcolumn not between", value1, value2, "fixcolumn");
            return (Criteria) this;
        }

        public Criteria andItemcodeIsNull() {
            addCriterion("itemcode is null");
            return (Criteria) this;
        }

        public Criteria andItemcodeIsNotNull() {
            addCriterion("itemcode is not null");
            return (Criteria) this;
        }

        public Criteria andItemcodeEqualTo(String value) {
            addCriterion("itemcode =", value, "itemcode");
            return (Criteria) this;
        }

        public Criteria andItemcodeNotEqualTo(String value) {
            addCriterion("itemcode <>", value, "itemcode");
            return (Criteria) this;
        }

        public Criteria andItemcodeGreaterThan(String value) {
            addCriterion("itemcode >", value, "itemcode");
            return (Criteria) this;
        }

        public Criteria andItemcodeGreaterThanOrEqualTo(String value) {
            addCriterion("itemcode >=", value, "itemcode");
            return (Criteria) this;
        }

        public Criteria andItemcodeLessThan(String value) {
            addCriterion("itemcode <", value, "itemcode");
            return (Criteria) this;
        }

        public Criteria andItemcodeLessThanOrEqualTo(String value) {
            addCriterion("itemcode <=", value, "itemcode");
            return (Criteria) this;
        }

        public Criteria andItemcodeLike(String value) {
            addCriterion("itemcode like", value, "itemcode");
            return (Criteria) this;
        }

        public Criteria andItemcodeNotLike(String value) {
            addCriterion("itemcode not like", value, "itemcode");
            return (Criteria) this;
        }

        public Criteria andItemcodeIn(List<String> values) {
            addCriterion("itemcode in", values, "itemcode");
            return (Criteria) this;
        }

        public Criteria andItemcodeNotIn(List<String> values) {
            addCriterion("itemcode not in", values, "itemcode");
            return (Criteria) this;
        }

        public Criteria andItemcodeBetween(String value1, String value2) {
            addCriterion("itemcode between", value1, value2, "itemcode");
            return (Criteria) this;
        }

        public Criteria andItemcodeNotBetween(String value1, String value2) {
            addCriterion("itemcode not between", value1, value2, "itemcode");
            return (Criteria) this;
        }

        public Criteria andUnitcodeIsNull() {
            addCriterion("unitcode is null");
            return (Criteria) this;
        }

        public Criteria andUnitcodeIsNotNull() {
            addCriterion("unitcode is not null");
            return (Criteria) this;
        }

        public Criteria andUnitcodeEqualTo(String value) {
            addCriterion("unitcode =", value, "unitcode");
            return (Criteria) this;
        }

        public Criteria andUnitcodeNotEqualTo(String value) {
            addCriterion("unitcode <>", value, "unitcode");
            return (Criteria) this;
        }

        public Criteria andUnitcodeGreaterThan(String value) {
            addCriterion("unitcode >", value, "unitcode");
            return (Criteria) this;
        }

        public Criteria andUnitcodeGreaterThanOrEqualTo(String value) {
            addCriterion("unitcode >=", value, "unitcode");
            return (Criteria) this;
        }

        public Criteria andUnitcodeLessThan(String value) {
            addCriterion("unitcode <", value, "unitcode");
            return (Criteria) this;
        }

        public Criteria andUnitcodeLessThanOrEqualTo(String value) {
            addCriterion("unitcode <=", value, "unitcode");
            return (Criteria) this;
        }

        public Criteria andUnitcodeLike(String value) {
            addCriterion("unitcode like", value, "unitcode");
            return (Criteria) this;
        }

        public Criteria andUnitcodeNotLike(String value) {
            addCriterion("unitcode not like", value, "unitcode");
            return (Criteria) this;
        }

        public Criteria andUnitcodeIn(List<String> values) {
            addCriterion("unitcode in", values, "unitcode");
            return (Criteria) this;
        }

        public Criteria andUnitcodeNotIn(List<String> values) {
            addCriterion("unitcode not in", values, "unitcode");
            return (Criteria) this;
        }

        public Criteria andUnitcodeBetween(String value1, String value2) {
            addCriterion("unitcode between", value1, value2, "unitcode");
            return (Criteria) this;
        }

        public Criteria andUnitcodeNotBetween(String value1, String value2) {
            addCriterion("unitcode not between", value1, value2, "unitcode");
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

        public Criteria andColwidthIsNull() {
            addCriterion("colwidth is null");
            return (Criteria) this;
        }

        public Criteria andColwidthIsNotNull() {
            addCriterion("colwidth is not null");
            return (Criteria) this;
        }

        public Criteria andColwidthEqualTo(Integer value) {
            addCriterion("colwidth =", value, "colwidth");
            return (Criteria) this;
        }

        public Criteria andColwidthNotEqualTo(Integer value) {
            addCriterion("colwidth <>", value, "colwidth");
            return (Criteria) this;
        }

        public Criteria andColwidthGreaterThan(Integer value) {
            addCriterion("colwidth >", value, "colwidth");
            return (Criteria) this;
        }

        public Criteria andColwidthGreaterThanOrEqualTo(Integer value) {
            addCriterion("colwidth >=", value, "colwidth");
            return (Criteria) this;
        }

        public Criteria andColwidthLessThan(Integer value) {
            addCriterion("colwidth <", value, "colwidth");
            return (Criteria) this;
        }

        public Criteria andColwidthLessThanOrEqualTo(Integer value) {
            addCriterion("colwidth <=", value, "colwidth");
            return (Criteria) this;
        }

        public Criteria andColwidthIn(List<Integer> values) {
            addCriterion("colwidth in", values, "colwidth");
            return (Criteria) this;
        }

        public Criteria andColwidthNotIn(List<Integer> values) {
            addCriterion("colwidth not in", values, "colwidth");
            return (Criteria) this;
        }

        public Criteria andColwidthBetween(Integer value1, Integer value2) {
            addCriterion("colwidth between", value1, value2, "colwidth");
            return (Criteria) this;
        }

        public Criteria andColwidthNotBetween(Integer value1, Integer value2) {
            addCriterion("colwidth not between", value1, value2, "colwidth");
            return (Criteria) this;
        }

        public Criteria andColalignIsNull() {
            addCriterion("colalign is null");
            return (Criteria) this;
        }

        public Criteria andColalignIsNotNull() {
            addCriterion("colalign is not null");
            return (Criteria) this;
        }

        public Criteria andColalignEqualTo(String value) {
            addCriterion("colalign =", value, "colalign");
            return (Criteria) this;
        }

        public Criteria andColalignNotEqualTo(String value) {
            addCriterion("colalign <>", value, "colalign");
            return (Criteria) this;
        }

        public Criteria andColalignGreaterThan(String value) {
            addCriterion("colalign >", value, "colalign");
            return (Criteria) this;
        }

        public Criteria andColalignGreaterThanOrEqualTo(String value) {
            addCriterion("colalign >=", value, "colalign");
            return (Criteria) this;
        }

        public Criteria andColalignLessThan(String value) {
            addCriterion("colalign <", value, "colalign");
            return (Criteria) this;
        }

        public Criteria andColalignLessThanOrEqualTo(String value) {
            addCriterion("colalign <=", value, "colalign");
            return (Criteria) this;
        }

        public Criteria andColalignLike(String value) {
            addCriterion("colalign like", value, "colalign");
            return (Criteria) this;
        }

        public Criteria andColalignNotLike(String value) {
            addCriterion("colalign not like", value, "colalign");
            return (Criteria) this;
        }

        public Criteria andColalignIn(List<String> values) {
            addCriterion("colalign in", values, "colalign");
            return (Criteria) this;
        }

        public Criteria andColalignNotIn(List<String> values) {
            addCriterion("colalign not in", values, "colalign");
            return (Criteria) this;
        }

        public Criteria andColalignBetween(String value1, String value2) {
            addCriterion("colalign between", value1, value2, "colalign");
            return (Criteria) this;
        }

        public Criteria andColalignNotBetween(String value1, String value2) {
            addCriterion("colalign not between", value1, value2, "colalign");
            return (Criteria) this;
        }

        public Criteria andOrdernoIsNull() {
            addCriterion("orderno is null");
            return (Criteria) this;
        }

        public Criteria andOrdernoIsNotNull() {
            addCriterion("orderno is not null");
            return (Criteria) this;
        }

        public Criteria andOrdernoEqualTo(Integer value) {
            addCriterion("orderno =", value, "orderno");
            return (Criteria) this;
        }

        public Criteria andOrdernoNotEqualTo(Integer value) {
            addCriterion("orderno <>", value, "orderno");
            return (Criteria) this;
        }

        public Criteria andOrdernoGreaterThan(Integer value) {
            addCriterion("orderno >", value, "orderno");
            return (Criteria) this;
        }

        public Criteria andOrdernoGreaterThanOrEqualTo(Integer value) {
            addCriterion("orderno >=", value, "orderno");
            return (Criteria) this;
        }

        public Criteria andOrdernoLessThan(Integer value) {
            addCriterion("orderno <", value, "orderno");
            return (Criteria) this;
        }

        public Criteria andOrdernoLessThanOrEqualTo(Integer value) {
            addCriterion("orderno <=", value, "orderno");
            return (Criteria) this;
        }

        public Criteria andOrdernoIn(List<Integer> values) {
            addCriterion("orderno in", values, "orderno");
            return (Criteria) this;
        }

        public Criteria andOrdernoNotIn(List<Integer> values) {
            addCriterion("orderno not in", values, "orderno");
            return (Criteria) this;
        }

        public Criteria andOrdernoBetween(Integer value1, Integer value2) {
            addCriterion("orderno between", value1, value2, "orderno");
            return (Criteria) this;
        }

        public Criteria andOrdernoNotBetween(Integer value1, Integer value2) {
            addCriterion("orderno not between", value1, value2, "orderno");
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

        public Criteria andNum1EqualTo(String value) {
            addCriterion("num1 =", value, "num1");
            return (Criteria) this;
        }

        public Criteria andNum1NotEqualTo(String value) {
            addCriterion("num1 <>", value, "num1");
            return (Criteria) this;
        }

        public Criteria andNum1GreaterThan(String value) {
            addCriterion("num1 >", value, "num1");
            return (Criteria) this;
        }

        public Criteria andNum1GreaterThanOrEqualTo(String value) {
            addCriterion("num1 >=", value, "num1");
            return (Criteria) this;
        }

        public Criteria andNum1LessThan(String value) {
            addCriterion("num1 <", value, "num1");
            return (Criteria) this;
        }

        public Criteria andNum1LessThanOrEqualTo(String value) {
            addCriterion("num1 <=", value, "num1");
            return (Criteria) this;
        }

        public Criteria andNum1Like(String value) {
            addCriterion("num1 like", value, "num1");
            return (Criteria) this;
        }

        public Criteria andNum1NotLike(String value) {
            addCriterion("num1 not like", value, "num1");
            return (Criteria) this;
        }

        public Criteria andNum1In(List<String> values) {
            addCriterion("num1 in", values, "num1");
            return (Criteria) this;
        }

        public Criteria andNum1NotIn(List<String> values) {
            addCriterion("num1 not in", values, "num1");
            return (Criteria) this;
        }

        public Criteria andNum1Between(String value1, String value2) {
            addCriterion("num1 between", value1, value2, "num1");
            return (Criteria) this;
        }

        public Criteria andNum1NotBetween(String value1, String value2) {
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

        public Criteria andNum2EqualTo(String value) {
            addCriterion("num2 =", value, "num2");
            return (Criteria) this;
        }

        public Criteria andNum2NotEqualTo(String value) {
            addCriterion("num2 <>", value, "num2");
            return (Criteria) this;
        }

        public Criteria andNum2GreaterThan(String value) {
            addCriterion("num2 >", value, "num2");
            return (Criteria) this;
        }

        public Criteria andNum2GreaterThanOrEqualTo(String value) {
            addCriterion("num2 >=", value, "num2");
            return (Criteria) this;
        }

        public Criteria andNum2LessThan(String value) {
            addCriterion("num2 <", value, "num2");
            return (Criteria) this;
        }

        public Criteria andNum2LessThanOrEqualTo(String value) {
            addCriterion("num2 <=", value, "num2");
            return (Criteria) this;
        }

        public Criteria andNum2Like(String value) {
            addCriterion("num2 like", value, "num2");
            return (Criteria) this;
        }

        public Criteria andNum2NotLike(String value) {
            addCriterion("num2 not like", value, "num2");
            return (Criteria) this;
        }

        public Criteria andNum2In(List<String> values) {
            addCriterion("num2 in", values, "num2");
            return (Criteria) this;
        }

        public Criteria andNum2NotIn(List<String> values) {
            addCriterion("num2 not in", values, "num2");
            return (Criteria) this;
        }

        public Criteria andNum2Between(String value1, String value2) {
            addCriterion("num2 between", value1, value2, "num2");
            return (Criteria) this;
        }

        public Criteria andNum2NotBetween(String value1, String value2) {
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

        public Criteria andNum3EqualTo(String value) {
            addCriterion("num3 =", value, "num3");
            return (Criteria) this;
        }

        public Criteria andNum3NotEqualTo(String value) {
            addCriterion("num3 <>", value, "num3");
            return (Criteria) this;
        }

        public Criteria andNum3GreaterThan(String value) {
            addCriterion("num3 >", value, "num3");
            return (Criteria) this;
        }

        public Criteria andNum3GreaterThanOrEqualTo(String value) {
            addCriterion("num3 >=", value, "num3");
            return (Criteria) this;
        }

        public Criteria andNum3LessThan(String value) {
            addCriterion("num3 <", value, "num3");
            return (Criteria) this;
        }

        public Criteria andNum3LessThanOrEqualTo(String value) {
            addCriterion("num3 <=", value, "num3");
            return (Criteria) this;
        }

        public Criteria andNum3Like(String value) {
            addCriterion("num3 like", value, "num3");
            return (Criteria) this;
        }

        public Criteria andNum3NotLike(String value) {
            addCriterion("num3 not like", value, "num3");
            return (Criteria) this;
        }

        public Criteria andNum3In(List<String> values) {
            addCriterion("num3 in", values, "num3");
            return (Criteria) this;
        }

        public Criteria andNum3NotIn(List<String> values) {
            addCriterion("num3 not in", values, "num3");
            return (Criteria) this;
        }

        public Criteria andNum3Between(String value1, String value2) {
            addCriterion("num3 between", value1, value2, "num3");
            return (Criteria) this;
        }

        public Criteria andNum3NotBetween(String value1, String value2) {
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

        public Criteria andNum4EqualTo(String value) {
            addCriterion("num4 =", value, "num4");
            return (Criteria) this;
        }

        public Criteria andNum4NotEqualTo(String value) {
            addCriterion("num4 <>", value, "num4");
            return (Criteria) this;
        }

        public Criteria andNum4GreaterThan(String value) {
            addCriterion("num4 >", value, "num4");
            return (Criteria) this;
        }

        public Criteria andNum4GreaterThanOrEqualTo(String value) {
            addCriterion("num4 >=", value, "num4");
            return (Criteria) this;
        }

        public Criteria andNum4LessThan(String value) {
            addCriterion("num4 <", value, "num4");
            return (Criteria) this;
        }

        public Criteria andNum4LessThanOrEqualTo(String value) {
            addCriterion("num4 <=", value, "num4");
            return (Criteria) this;
        }

        public Criteria andNum4Like(String value) {
            addCriterion("num4 like", value, "num4");
            return (Criteria) this;
        }

        public Criteria andNum4NotLike(String value) {
            addCriterion("num4 not like", value, "num4");
            return (Criteria) this;
        }

        public Criteria andNum4In(List<String> values) {
            addCriterion("num4 in", values, "num4");
            return (Criteria) this;
        }

        public Criteria andNum4NotIn(List<String> values) {
            addCriterion("num4 not in", values, "num4");
            return (Criteria) this;
        }

        public Criteria andNum4Between(String value1, String value2) {
            addCriterion("num4 between", value1, value2, "num4");
            return (Criteria) this;
        }

        public Criteria andNum4NotBetween(String value1, String value2) {
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

        public Criteria andNum5EqualTo(String value) {
            addCriterion("num5 =", value, "num5");
            return (Criteria) this;
        }

        public Criteria andNum5NotEqualTo(String value) {
            addCriterion("num5 <>", value, "num5");
            return (Criteria) this;
        }

        public Criteria andNum5GreaterThan(String value) {
            addCriterion("num5 >", value, "num5");
            return (Criteria) this;
        }

        public Criteria andNum5GreaterThanOrEqualTo(String value) {
            addCriterion("num5 >=", value, "num5");
            return (Criteria) this;
        }

        public Criteria andNum5LessThan(String value) {
            addCriterion("num5 <", value, "num5");
            return (Criteria) this;
        }

        public Criteria andNum5LessThanOrEqualTo(String value) {
            addCriterion("num5 <=", value, "num5");
            return (Criteria) this;
        }

        public Criteria andNum5Like(String value) {
            addCriterion("num5 like", value, "num5");
            return (Criteria) this;
        }

        public Criteria andNum5NotLike(String value) {
            addCriterion("num5 not like", value, "num5");
            return (Criteria) this;
        }

        public Criteria andNum5In(List<String> values) {
            addCriterion("num5 in", values, "num5");
            return (Criteria) this;
        }

        public Criteria andNum5NotIn(List<String> values) {
            addCriterion("num5 not in", values, "num5");
            return (Criteria) this;
        }

        public Criteria andNum5Between(String value1, String value2) {
            addCriterion("num5 between", value1, value2, "num5");
            return (Criteria) this;
        }

        public Criteria andNum5NotBetween(String value1, String value2) {
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

        public Criteria andNum6EqualTo(String value) {
            addCriterion("num6 =", value, "num6");
            return (Criteria) this;
        }

        public Criteria andNum6NotEqualTo(String value) {
            addCriterion("num6 <>", value, "num6");
            return (Criteria) this;
        }

        public Criteria andNum6GreaterThan(String value) {
            addCriterion("num6 >", value, "num6");
            return (Criteria) this;
        }

        public Criteria andNum6GreaterThanOrEqualTo(String value) {
            addCriterion("num6 >=", value, "num6");
            return (Criteria) this;
        }

        public Criteria andNum6LessThan(String value) {
            addCriterion("num6 <", value, "num6");
            return (Criteria) this;
        }

        public Criteria andNum6LessThanOrEqualTo(String value) {
            addCriterion("num6 <=", value, "num6");
            return (Criteria) this;
        }

        public Criteria andNum6Like(String value) {
            addCriterion("num6 like", value, "num6");
            return (Criteria) this;
        }

        public Criteria andNum6NotLike(String value) {
            addCriterion("num6 not like", value, "num6");
            return (Criteria) this;
        }

        public Criteria andNum6In(List<String> values) {
            addCriterion("num6 in", values, "num6");
            return (Criteria) this;
        }

        public Criteria andNum6NotIn(List<String> values) {
            addCriterion("num6 not in", values, "num6");
            return (Criteria) this;
        }

        public Criteria andNum6Between(String value1, String value2) {
            addCriterion("num6 between", value1, value2, "num6");
            return (Criteria) this;
        }

        public Criteria andNum6NotBetween(String value1, String value2) {
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

        public Criteria andNum7EqualTo(String value) {
            addCriterion("num7 =", value, "num7");
            return (Criteria) this;
        }

        public Criteria andNum7NotEqualTo(String value) {
            addCriterion("num7 <>", value, "num7");
            return (Criteria) this;
        }

        public Criteria andNum7GreaterThan(String value) {
            addCriterion("num7 >", value, "num7");
            return (Criteria) this;
        }

        public Criteria andNum7GreaterThanOrEqualTo(String value) {
            addCriterion("num7 >=", value, "num7");
            return (Criteria) this;
        }

        public Criteria andNum7LessThan(String value) {
            addCriterion("num7 <", value, "num7");
            return (Criteria) this;
        }

        public Criteria andNum7LessThanOrEqualTo(String value) {
            addCriterion("num7 <=", value, "num7");
            return (Criteria) this;
        }

        public Criteria andNum7Like(String value) {
            addCriterion("num7 like", value, "num7");
            return (Criteria) this;
        }

        public Criteria andNum7NotLike(String value) {
            addCriterion("num7 not like", value, "num7");
            return (Criteria) this;
        }

        public Criteria andNum7In(List<String> values) {
            addCriterion("num7 in", values, "num7");
            return (Criteria) this;
        }

        public Criteria andNum7NotIn(List<String> values) {
            addCriterion("num7 not in", values, "num7");
            return (Criteria) this;
        }

        public Criteria andNum7Between(String value1, String value2) {
            addCriterion("num7 between", value1, value2, "num7");
            return (Criteria) this;
        }

        public Criteria andNum7NotBetween(String value1, String value2) {
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

        public Criteria andNum8EqualTo(String value) {
            addCriterion("num8 =", value, "num8");
            return (Criteria) this;
        }

        public Criteria andNum8NotEqualTo(String value) {
            addCriterion("num8 <>", value, "num8");
            return (Criteria) this;
        }

        public Criteria andNum8GreaterThan(String value) {
            addCriterion("num8 >", value, "num8");
            return (Criteria) this;
        }

        public Criteria andNum8GreaterThanOrEqualTo(String value) {
            addCriterion("num8 >=", value, "num8");
            return (Criteria) this;
        }

        public Criteria andNum8LessThan(String value) {
            addCriterion("num8 <", value, "num8");
            return (Criteria) this;
        }

        public Criteria andNum8LessThanOrEqualTo(String value) {
            addCriterion("num8 <=", value, "num8");
            return (Criteria) this;
        }

        public Criteria andNum8Like(String value) {
            addCriterion("num8 like", value, "num8");
            return (Criteria) this;
        }

        public Criteria andNum8NotLike(String value) {
            addCriterion("num8 not like", value, "num8");
            return (Criteria) this;
        }

        public Criteria andNum8In(List<String> values) {
            addCriterion("num8 in", values, "num8");
            return (Criteria) this;
        }

        public Criteria andNum8NotIn(List<String> values) {
            addCriterion("num8 not in", values, "num8");
            return (Criteria) this;
        }

        public Criteria andNum8Between(String value1, String value2) {
            addCriterion("num8 between", value1, value2, "num8");
            return (Criteria) this;
        }

        public Criteria andNum8NotBetween(String value1, String value2) {
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

        public Criteria andNum9EqualTo(String value) {
            addCriterion("num9 =", value, "num9");
            return (Criteria) this;
        }

        public Criteria andNum9NotEqualTo(String value) {
            addCriterion("num9 <>", value, "num9");
            return (Criteria) this;
        }

        public Criteria andNum9GreaterThan(String value) {
            addCriterion("num9 >", value, "num9");
            return (Criteria) this;
        }

        public Criteria andNum9GreaterThanOrEqualTo(String value) {
            addCriterion("num9 >=", value, "num9");
            return (Criteria) this;
        }

        public Criteria andNum9LessThan(String value) {
            addCriterion("num9 <", value, "num9");
            return (Criteria) this;
        }

        public Criteria andNum9LessThanOrEqualTo(String value) {
            addCriterion("num9 <=", value, "num9");
            return (Criteria) this;
        }

        public Criteria andNum9Like(String value) {
            addCriterion("num9 like", value, "num9");
            return (Criteria) this;
        }

        public Criteria andNum9NotLike(String value) {
            addCriterion("num9 not like", value, "num9");
            return (Criteria) this;
        }

        public Criteria andNum9In(List<String> values) {
            addCriterion("num9 in", values, "num9");
            return (Criteria) this;
        }

        public Criteria andNum9NotIn(List<String> values) {
            addCriterion("num9 not in", values, "num9");
            return (Criteria) this;
        }

        public Criteria andNum9Between(String value1, String value2) {
            addCriterion("num9 between", value1, value2, "num9");
            return (Criteria) this;
        }

        public Criteria andNum9NotBetween(String value1, String value2) {
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

        public Criteria andNum10EqualTo(String value) {
            addCriterion("num10 =", value, "num10");
            return (Criteria) this;
        }

        public Criteria andNum10NotEqualTo(String value) {
            addCriterion("num10 <>", value, "num10");
            return (Criteria) this;
        }

        public Criteria andNum10GreaterThan(String value) {
            addCriterion("num10 >", value, "num10");
            return (Criteria) this;
        }

        public Criteria andNum10GreaterThanOrEqualTo(String value) {
            addCriterion("num10 >=", value, "num10");
            return (Criteria) this;
        }

        public Criteria andNum10LessThan(String value) {
            addCriterion("num10 <", value, "num10");
            return (Criteria) this;
        }

        public Criteria andNum10LessThanOrEqualTo(String value) {
            addCriterion("num10 <=", value, "num10");
            return (Criteria) this;
        }

        public Criteria andNum10Like(String value) {
            addCriterion("num10 like", value, "num10");
            return (Criteria) this;
        }

        public Criteria andNum10NotLike(String value) {
            addCriterion("num10 not like", value, "num10");
            return (Criteria) this;
        }

        public Criteria andNum10In(List<String> values) {
            addCriterion("num10 in", values, "num10");
            return (Criteria) this;
        }

        public Criteria andNum10NotIn(List<String> values) {
            addCriterion("num10 not in", values, "num10");
            return (Criteria) this;
        }

        public Criteria andNum10Between(String value1, String value2) {
            addCriterion("num10 between", value1, value2, "num10");
            return (Criteria) this;
        }

        public Criteria andNum10NotBetween(String value1, String value2) {
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