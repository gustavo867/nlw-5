import 'package:DevQuiz/challenge/widgets/quiz_widget.dart';
import 'package:DevQuiz/core/app_colors.dart';
import 'package:DevQuiz/shared/models/user_model.dart';

import 'home_controller.dart';
import 'package:DevQuiz/home/widgets/appBar/app_bar_widget.dart';
import 'package:DevQuiz/home/widgets/level_button/level_button_widget.dart';
import 'package:DevQuiz/home/widgets/quiz_card/quiz_card_widget.dart';
import 'package:flutter/material.dart';

import 'home_state.dart';

class HomePage extends StatefulWidget {
  HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final controller = HomeController();

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    controller.getUser();
    controller.getQuizzes();
    controller.stateNotifier.addListener(() {
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) {
    if (controller.state == HomeState.success) {
      return Scaffold(
          appBar: AppBarWidget(user: controller.user!),
          body: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Container(
              margin: const EdgeInsets.symmetric(vertical: 10),
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      LevelButtonWidget(label: "Fácil"),
                      LevelButtonWidget(label: "Médio"),
                      LevelButtonWidget(label: "Difícil"),
                      LevelButtonWidget(label: "Perito"),
                    ],
                  ),
                  SizedBox(height: 24),
                  Expanded(
                    child: GridView.count(
                      crossAxisSpacing: 10,
                      mainAxisSpacing: 16,
                      crossAxisCount: 2,
                      children: controller.quizzes!
                          .map((item) => QuizCardWidget(
                                title: item.title,
                                percent: item.questionAnswered /
                                    item.questions.length,
                                completed:
                                    "${item.questionAnswered}/${item.questions.length}",
                              ))
                          .toList(),
                    ),
                  )
                ],
              ),
            ),
          ));
    } else {
      return Scaffold(
        body: Center(
          child: CircularProgressIndicator(
              valueColor: AlwaysStoppedAnimation<Color>(AppColors.darkGreen)),
        ),
      );
    }
  }
}
