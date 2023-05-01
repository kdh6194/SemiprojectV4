package honeybee.spring4mvc.semiprojectv4.controller;

import honeybee.spring4mvc.semiprojectv4.model.Member;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/join")//공통으로 들어가는 주소
public class JoinController {

    @GetMapping("/agree")
    public String agree() {
        return "join/agree.tiles";
    }
    @GetMapping("/checkme")
    public String checkme() {
        return "join/checkme.tiles";
    }
    @PostMapping("/joinme")
    public ModelAndView joinme(Member mb) {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("join/joinme.tiles");
        mv.addObject("mb",mb);
        return mv;
    }
    @GetMapping("/joinok")
    public String joinok() {
        return "join/joinok.tiles";
    }
}